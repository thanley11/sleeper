import * as grid from './grid.actions';
import { Player } from '../player.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface State extends EntityState<Player> {
}

export const adapter: EntityAdapter<Player> = createEntityAdapter<Player>({
  selectId: (player: Player) => player.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({});

export function reducer(state = initialState, action: grid.GridActions): State {
  switch (action.type) {
    case grid.ActionTypes.GET_PLAYERS_SUCCESS:
        return adapter.addMany(
        action.payload,
        {
          ...state
        }
      );
  
    default:
      return state;
  }
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
