import * as chat from './chat.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Message } from '../message.model';

export interface State extends EntityState<Message> {
    loading: boolean;
}

export const adapter: EntityAdapter<Message> = createEntityAdapter<Message>({
  selectId: (msg: Message) => msg.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({ loading: false});

export function reducer(state = initialState, action: chat.MessageActions): State {
  switch (action.type) {
    case chat.ActionTypes.SUBMIT_MSG:
        return adapter.addOne(
        action.payload,
        {
          ...state
        }
      );
    case chat.ActionTypes.GET_MSG_SUCCESS:
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
