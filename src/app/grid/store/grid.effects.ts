import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Player } from '../player.model';
import { PlayersService } from './../services/players.service';
import * as grid from './grid.actions';


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

  constructor(
    private actions$: Actions,
    private playersService: PlayersService,
  ) {}
}
