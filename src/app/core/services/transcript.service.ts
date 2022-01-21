import {Injectable} from '@angular/core';
import TranscriptServiceMock from './mocks/transcript.service.mock';

@Injectable({providedIn: 'root'})
export default class TranscriptService extends TranscriptServiceMock {
}
