import { AppState } from '.';
import * as appActions from './app.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: AppState = {
  user: null // { name: null, roles: [] }
};

export const selectUser = (state: AppState) => state.user;
export const selectLoggedIn = (state: AppState) => (state.user && state.user.name) ? true : false;

const appReducer = createReducer(initialState,
  on(appActions.fetchUser, state => { console.log('fetchUser'); return state; }),
  on(appActions.fetchUserSuccess, (state, userInfo) => ({ ...state, user: userInfo })),
  on(appActions.fetchUserFail, state => { console.log('fetchUserFail'); return state; }),
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
