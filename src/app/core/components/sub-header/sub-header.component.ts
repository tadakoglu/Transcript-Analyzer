import { Component, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { Observable } from 'rxjs';
import AgentFacade from '../../facades/agent.facade';
import CallFacade from '../../facades/call.facade';
import MatchingPercentageFacade from '../../facades/matchingPercentage.facade';
import TranscriptFacade from '../../facades/transcript.facade';
import Agent from '../../models/agent';
import {ChangeDetectionStrategy} from '@angular/core';
import TemplateService from '../../services/template.service';

@Component({
  selector: 'app-gc-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SubHeaderComponent {
  constructor(private _tplService: TemplateService,
    public agents: AgentFacade,
    public calls: CallFacade,
    public transcripts: TranscriptFacade,
    public percentages: MatchingPercentageFacade,
  ) {

  }

  activeAgent: Observable<Agent> = this.agents.activeAgent$;
  matchingPercentage: Observable<number> = this.percentages.matchingPercentage$;
  get content(): TemplateRef<any> | null {
    return this._tplService.get('subHeader') || null;
  }

  public setAgent(event: any): void {
    this.clearCallSelect();
    this.agents.setActiveAgent(event.value);
  };
  public setCall(event: any) {
    this.calls.setActiveCall(event?.value)
 
  }
  public setMatchingPercentage(event: any): void {
    this.percentages.setMatchingPercentage(event.value);
  }

  
 
  @ViewChild('callTemplateRef') callSelect: MatSelect = {} as MatSelect
  private clearCallSelect(){
    this.callSelect.writeValue(undefined) //Clear selection on call select to reload data again when reselection happens
  }


}
