import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { createSelector } from '@ngrx/store';

import * as fromSidebar from '../sidebar/store/sidebar.reducer';
import * as fromGrid from '../grid/store/grid.reducer';

export interface AppState {
  sidebar: fromSidebar.State;
  players: fromGrid.State;
}

export const reducers: ActionReducerMap<AppState> = {
  sidebar: fromSidebar.reducer,
  players: fromGrid.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
? []
: [];

/**
 * Layout Reducers
 */
export const getSidebarState = (state: AppState) => state.sidebar;
export const getGridState = (state: AppState) => state.players;

export const getShowSidenav = createSelector(getSidebarState, fromSidebar.getShowSidenav);

/**
 * Grid Reducers
 */
export const getPlayers = createSelector(getGridState, fromGrid.selectAll);
