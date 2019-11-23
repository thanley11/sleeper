import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as gridActions from '../store/grid.actions';
import * as fromRoot from '../../reducers/index';
import { Player } from '../player.model';

@Component({
  selector: 'eg-grid',
  template: `
  <eg-grid-cards
    [players]="players$ | async">
  </eg-grid-cards>
 `,
  styles: ['./grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnInit {
  players$: Observable<Player[]>;
  constructor(private store: Store<fromRoot.AppState>) {
    this.players$ = store.select(fromRoot.getPlayers);
  }

  ngOnInit() {
    this.store.dispatch(new gridActions.GetPlayers());
  }
}
