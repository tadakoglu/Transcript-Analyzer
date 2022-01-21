import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Transcript from 'src/app/core/models/transcript.model';
import TranscriptState from '../states/transcript.state';

@Injectable({ providedIn: 'root' })
export default class TranscriptFacade {

  public activeTranscript$: Observable<Transcript> = this._state.activeTranscript$;
  public filteredTranscript$: Observable<Transcript> = this._state.filteredTranscript$;
  public panel1Title$: Observable<number> = this._state.panel1Title$
  public panel2Title$: Observable<number> = this._state.panel2Title$

  
  constructor(private readonly _state: TranscriptState) {
  }
}
