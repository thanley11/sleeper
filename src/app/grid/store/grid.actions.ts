import { Player } from './../player.model';
import { Action } from '@ngrx/store';

export enum ActionTypes {
    GET_PLAYERS = '[Grid] Get Players',
    GET_PLAYERS_SUCCESS = '[Grid] Get Players Success',
    GET_PLAYERS_FAIL = '[Grid] Get Players Fail',
};

export class GetPlayers implements Action {
  readonly type = ActionTypes.GET_PLAYERS;
}

export class GetPlayersSuccess implements Action {
   readonly type = ActionTypes.GET_PLAYERS_SUCCESS;
   constructor(public payload: Player[]) { }
}

export class GetPlayersFail implements Action {
  readonly type = ActionTypes.GET_PLAYERS_FAIL;
}

export type GridActions
  = GetPlayers |
    GetPlayersSuccess |
    GetPlayersFail 
