import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Player } from '../player.model';
import { PlayersService } from './../services/players.service';
import * as grid from './grid.actions';
import * as chat from './chat.actions';
import { Message } from '../message.model';


@Injectable()
export class GridEffects {
   @Effect()
  getPlayers$: Observable<Action> = this.actions$.pipe(
     ofType(grid.ActionTypes.GET_PLAYERS),
     switchMap(() => {
        return this.playersService.getPlayers()
        .pipe(
          map((players: Player[]) => new grid.GetPlayersSuccess(players)),
          catchError(error => of(new grid.GetPlayersFail())))
    }
    ));

    @Effect()
    getMessages$: Observable<Action> = this.actions$.pipe(
      ofType(chat.ActionTypes.GET_MSGS),
      switchMap(() => {
         return this.playersService.getMessages()
         .pipe(
           map((msgs: Message[]) => new chat.GetMessagesSuccess(msgs)),
           catchError(error => of(new chat.GetMessagesFail())))
     }
     ));

     @Effect()
     submitMessage$: Observable<Action> = this.actions$.pipe(
      ofType(chat.ActionTypes.SUBMIT_MSG),
      switchMap((action: Message) => {
         return this.playersService.addMessage(action)
         .pipe(
           map(() => new chat.SubmitMessageSuccess()),
           catchError(error => of(new chat.GetMessagesFail())))
     }
     ));



  constructor(
    private actions$: Actions,
    private playersService: PlayersService,
  ) {}
}
