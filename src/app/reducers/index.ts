import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { createSelector } from '@ngrx/store';

import * as fromSidebar from '../sidebar/store/sidebar.reducer';
import * as fromGrid from '../grid/store/grid.reducer';
import * as fromMessages from '../grid/store/chat.reducer';
import { Player } from '../grid/player.model';
import { Message, ChatMessage } from '../grid/message.model';

export interface AppState {
  sidebar: fromSidebar.State;
  players: fromGrid.State;
  messages: fromMessages.State;
}

export const reducers: ActionReducerMap<AppState> = {
  sidebar: fromSidebar.reducer,
  players: fromGrid.reducer,
  messages: fromMessages.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
? []
: [];

/**
 * Layout Reducers
 */
export const getSidebarState = (state: AppState) => state.sidebar;
export const getGridState = (state: AppState) => state.players;
export const getMessageState = (state: AppState) => state.messages;

export const getShowSidenav = createSelector(getSidebarState, fromSidebar.getShowSidenav);

/**
 * Grid Reducers
 */
export const getPlayers = createSelector(getGridState, fromGrid.selectAll);
export const getMessages = createSelector(getMessageState, fromMessages.selectAll);

// Associate messages to user by parent ID : TODO
export const getMessagesByPlayer = createSelector(getPlayers, getMessages,
  (players: Player[], messages: Message[]) =>
  {
    return messages.map(x => <ChatMessage>{id: x.id, 
      player: players.find(y => y.id === x.senderId), 
      parentMsgId: x.parentMsgId, 
      msg: x.msg, 
      timestamp: x.timestamp,
      isGif: x.isGif}).filter(z => !!z.player);
  });