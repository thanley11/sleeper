import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as gridActions from '../store/grid.actions';
import * as chatActions from '../store/chat.actions';
import * as fromRoot from '../../reducers/index';
import { Player } from '../player.model';
import { Message, ChatMessage } from '../message.model';

@Component({
  selector: 'eg-grid',
  template: `
  <eg-grid-window
    [messages]="messagesByPlayer$ | async">
  </eg-grid-window>
  <eg-grid-input [currentUser]="currentUser"></eg-grid-input>
 `,
  styles: ['./grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnInit {
  messagesByPlayer$: Observable<ChatMessage[]>

  currentUser: Player;
  constructor(private store: Store<fromRoot.AppState>) {
    this.messagesByPlayer$ = store.select(fromRoot.getMessagesByPlayer);
    this.currentUser = <Player>{ id: '1234', first_name: 'Tom', last_name: 'Hanley', avatar: ''  }
  }

  ngOnInit() {
    this.store.dispatch(new gridActions.GetPlayers());
    this.store.dispatch(new chatActions.GetMessages());
  }
}
