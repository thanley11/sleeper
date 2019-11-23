
import { Action } from '@ngrx/store';
import { Message } from '../message.model';

export enum ActionTypes {
    SUBMIT_MSG = '[Grid] Submit Message',
    SUBMIT_GIF = '[Grid] Submit Gif',
    GET_MSGS  = '[Grid] Get Messages',
    GET_MSG_SUCCESS  = '[Grid] Get Messages Success',
    GET_MSG_FAIL  = '[Grid] Get Messages Fail',
    SUBMIT_MSG_SUCCESS = ' [Grid] Submit Messages Success'
};

export class GetMessages implements Action {
    readonly type = ActionTypes.GET_MSGS;
  }
  
  export class GetMessagesSuccess implements Action {
    readonly type = ActionTypes.GET_MSG_SUCCESS;
    constructor(public payload: Message[]) { }
  }
  
  export class SubmitMessage implements Action {
    readonly type = ActionTypes.SUBMIT_MSG;
    constructor(public payload: Message) { }
  }

  export class SubmitGif implements Action {
    readonly type = ActionTypes.SUBMIT_GIF;
    constructor(public payload: Message) { }
  }
  
  export class SubmitMessageSuccess implements Action {
    readonly type = ActionTypes.SUBMIT_MSG_SUCCESS;
    constructor(public payload: Message) { }
  }
  
  export class GetMessagesFail implements Action {
    readonly type = ActionTypes.GET_MSG_FAIL;
  }

  export type MessageActions
  = SubmitMessage | 
    GetMessagesSuccess |
    GetMessagesFail |
    SubmitMessageSuccess |
    SubmitGif
