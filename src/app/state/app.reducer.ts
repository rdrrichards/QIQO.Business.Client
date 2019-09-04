import { AppState } from '.';
import * as appActions from './app.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: AppState = {
  user: { name: 'Richard Richards', roles: [] }
};

export const selectUser = (state: AppState) => state.user;
export const selectLoggedIn = (state: AppState) => state.user.name ? false : true;

const appReducer = createReducer(initialState,
  on(appActions.fetchUser, state => { console.log('fetchUser'); return state; }),
  on(appActions.fetchUserSuccess, state => { console.log('fetchUserSuccess'); return state; }),
  on(appActions.fetchUserFail, state => { console.log('fetchUserFail'); return state; }),
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
