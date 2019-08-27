import { AppState } from '.';
import * as appActions from './app.actions';

export const initialState: AppState = {
  user: { name: 'Richard Richards', roles: [] }
};

export function appReducer(state = initialState, action: appActions.AppActionsUnion): AppState {
  switch (action.type) {
    case appActions.fetchUser.type:
      console.log('did it happen?');
      return { ...state };
    default:
      return state;
  }
}
