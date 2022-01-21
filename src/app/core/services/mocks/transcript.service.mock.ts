import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Transcript from 'src/app/core/models/transcript.model';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable()
export default class TranscriptServiceMock {

    constructor(private http: HttpClient) { }
    
    getTranscripts$(): Observable<Transcript[]> {
        return this.http.get<Transcript[]>('/assets/data/transcript.json');
    }

}
