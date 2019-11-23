import * as sidebar from './sidebar.actions';


export interface State {
  showSidenav: boolean;
}

export const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: sidebar.Actions): State {
  switch (action.type) {
    case sidebar.ActionTypes.OPEN_SIDENAV:
      return {
        showSidenav: true
      };
    case sidebar.ActionTypes.CLOSE_SIDENAV:
      return {
        showSidenav: false
      };
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;

