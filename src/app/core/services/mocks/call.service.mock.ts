import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import Call from 'src/app/core/models/call.model';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable()
export default class CallServiceMock {
  constructor(private http: HttpClient) { }

  getCalls$(): Observable<Call[]> {
    return this.http.get<Call[]>('/assets/data/calls.json');
  }



}
