import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest,  Subject } from 'rxjs';
import Transcript from 'src/app/core/models/transcript.model';
import TranscriptService from '../services/transcript.service';
import MatchingPercentageState from './mathingPercentage.state';


@Injectable({ providedIn: 'root' })
export default class TranscriptState {

    // set active call
    // set matching percentage

    // filtered call = active call(call id) + matching percentage(perc) // find related talk

    public readonly _activeTranscript$ = new Subject<Transcript>();
    public readonly _filteredTranscript$ = new Subject<Transcript>();
    public readonly _transcripts$ = new BehaviorSubject<Transcript[]>([])
    public readonly _panel1Title$ = new BehaviorSubject(0);
    public readonly _panel2Title$ = new BehaviorSubject(0);


    public activeTranscript$ = this._activeTranscript$.asObservable();
    public filteredTranscript$ = this._filteredTranscript$.asObservable();
    public transcripts$ = this._transcripts$.asObservable();
    public panel1Title$ = this._panel1Title$.asObservable();
    public panel2Title$ = this._panel2Title$.asObservable();


    constructor(
        private readonly _transcriptService: TranscriptService,
        private readonly _matchingPercentageState: MatchingPercentageState
    ) {

        this._transcriptService.getTranscripts$()
            .subscribe((transcripts: Transcript[]) => {
                this._transcripts$.next(transcripts);
            });

        combineLatest([this._activeTranscript$, this._matchingPercentageState.matchingPercentage$])
            .subscribe(t => {
                // console.log("active trans" + t[0]?.id)
                // console.log("matcher" + t[1])
                //flush
                this._filteredTranscript$.next(undefined);
                this._panel1Title$.next(0);
                this._panel2Title$.next(0);

                let current = t[0]
                let perc = t[1]
                let all = this._transcripts$.value

                if (current) {
                    const transcript = Object.assign({} as Transcript, this._transcripts$.value.find((transcript: Transcript) => transcript.call_id === current.call_id))
                    if (transcript) {
                        transcript.transcript = transcript.transcript.filter(t => (t.similarity ?? 0) * 100 > perc)
                        transcript.script = transcript.script.filter(t => (t.similarity ?? 0) * 100 > perc)
                        this._filteredTranscript$.next(transcript);


                        let nominator = current.transcript.filter(t => (t.similarity ?? 0) * 100 > perc).length // those matches with script of agent

                        let agentCallTranscript = all.find(c => c?.call_id == current?.call_id) ?? ({} as Transcript);
                        let denominator = agentCallTranscript.transcript.length // all of agent
                        if (nominator == 0 && denominator == 0) {
                            denominator = 1; //To make val1(below) 0
                        }
                        let val1 = parseFloat((nominator / denominator * 100).toFixed(2))

                        let nominator2 = current.script.filter(t => (t.similarity ?? 0) * 100 > perc).length
                        let agentCallScript = all.find(c => c?.call_id == current?.call_id) ?? ({} as Transcript);
                        let denominator2 = agentCallScript.script.length // all of agent // all of agent
                        if (nominator2 == 0 && denominator2 == 0) {
                            denominator2 = 1; //To make val2(below) 0
                        }
                        let val2 = parseFloat((nominator2 / denominator2 * 100).toFixed(2))
                        this._panel1Title$.next(val1);
                        this._panel2Title$.next(val2);
                    }


                }



            })

    }

    setActiveTranscript(callId: string) {
        if (callId) {
            const transcript = this._transcripts$.value.find((transcript: Transcript) => transcript.call_id === callId);
            this._activeTranscript$.next(transcript);
            // console.log(callId, transcript);
        }
        else {
            this.resetActiveTranscript();
        }

    }

    resetActiveTranscript() {
        this._activeTranscript$.next(undefined);
    }



}
