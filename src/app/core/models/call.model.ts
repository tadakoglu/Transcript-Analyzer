import Agent from './agent';

export default interface Call {
  
  call_id: string;
  calltype_id: string;
  agent: Agent;
  customer: Agent;
  call_start_time: string;
  duration: number;
}

