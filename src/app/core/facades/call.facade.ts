import { Injectable } from '@angular/core';
import CallState from 'src/app/core/states/call.state';

@Injectable({ providedIn: 'root' })
export default class CallFacade {
  public activeAgentCalls$ = this._state.activeAgentCalls$;
  public calls$ = this._state.calls$;
  public setActiveCall = this._state.setActiveCall.bind(this._state);

  constructor(private readonly _state: CallState) {
  }
}
