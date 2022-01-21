import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Agent from 'src/app/core/models/agent';
import Call from 'src/app/core/models/call.model';
import CallService from 'src/app/core/services/call.service';
import AgentState from './agent.state';
import TranscriptState from './transcript.state';

@Injectable({ providedIn: 'root' })
export default class CallState {
  private readonly _calls$ = new BehaviorSubject<Call[]>([]);
  private readonly _activeAgentCalls$ = new BehaviorSubject<Call[]>([]);
  
  public calls$ = this._calls$.asObservable();
  public activeAgentCalls$ = this._activeAgentCalls$.asObservable();

  constructor(
    private readonly _callService: CallService,
    private readonly _agentState: AgentState,
    private readonly _transcriptState: TranscriptState
  ) {
    this._callService.getCalls$()
      .subscribe((calls: Call[]) => {
        this._calls$.next(calls)
      });

    this._agentState.activeAgent$
      .subscribe((agent: Agent) => {
        this.resetActiveCalls();
        this._transcriptState.resetActiveTranscript();
        if(agent){
          const calls = this._calls$.value.filter((call: Call) => call.agent?.agent_id === agent?.agent_id)
          this._activeAgentCalls$.next(calls);
        }
        
        
      });


  }

  public setActiveCall(callId: string): void {
    if (callId) {
      this._transcriptState.setActiveTranscript(callId) //if callId is undefined, will cause activeTranscript to be undefined
    }
    else {
      this._transcriptState.resetActiveTranscript();
    }
  }
  public resetActiveCalls(){
    this._activeAgentCalls$.next([])
  }

}
