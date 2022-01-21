import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import Agent from 'src/app/core/models/agent';
import AgentService from 'src/app/core/services/agent.service';
import TranscriptState from './transcript.state';

@Injectable({ providedIn: 'root' })
export default class AgentState {
  private readonly _agents$ = new BehaviorSubject<Agent[]>([]);
  private readonly _activeAgent$ = new Subject<Agent>();

  public agents$ = this._agents$.asObservable();
  public activeAgent$ = this._activeAgent$.asObservable();

  constructor(
    private readonly _agentService: AgentService,
    private readonly _transcriptState: TranscriptState) {
    this._agentService.getAgents$()
      .subscribe((agents: Agent[]) => {
        this._agents$.next(agents);
      });
  }

  public setActiveAgent(agentId: string): void {
    if (agentId) {
      const agent = this._agents$.value.find((agent: Agent) => agent.agent_id === agentId);
      this._activeAgent$.next(agent);
    }
    else {
      this._transcriptState.resetActiveTranscript();
      // this._callState.resetActiveCalls();
    }

  }
}
