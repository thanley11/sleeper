import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../reducers/index';
import { ChatMessage } from '../message.model';
import { Player } from '../player.model';
import * as chatActions from '../store/chat.actions';
import * as gridActions from '../store/grid.actions';

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
