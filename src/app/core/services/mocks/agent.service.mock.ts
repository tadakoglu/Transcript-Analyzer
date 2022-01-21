import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Agent from 'src/app/core/models/agent';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable()
export default class AgentServiceMock {
  constructor(private http: HttpClient) { }
  getAgents$(): Observable<Agent[]> {
    return this.http.get<Agent[]>('/assets/data/agents.json');
  }
}
