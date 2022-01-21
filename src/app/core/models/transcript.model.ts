
import Script from 'src/app/core/models/script.model';
import Agent from './agent';

export default interface Transcript {

  call_id: string;
  calltype_id: string;
  call_datetime: string;
  duration: number;
  agent: Agent;
  customer: Agent;
  script: Script[];
  transcript: Transcript[];
  similarity:number
  matching_sentence: string;
  matching_line: number;
  order: number;
  sentence:string
  timeFrom:string
  timeTo:string
}

