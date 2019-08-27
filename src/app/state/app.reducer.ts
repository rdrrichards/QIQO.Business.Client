import { AppState } from '.';
import * as appActions from './app.actions';

export const initialState: AppState = {
  user: { name: 'Richard Richards', roles: [] }
};

export function appReducer(state = initialState, action: appActions.AdminActionsUnion): AppState {
  switch (action.type) {
    case appActions.fetchUser.type:
      return { ...state };
    default:
      return state;
  }
}
