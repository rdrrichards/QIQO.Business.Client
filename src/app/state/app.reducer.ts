import { AppState } from '.';
import * as appActions from './app.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: AppState = {
  user: { name: 'Richard Richards', roles: [] }
};

export const appReducer = createReducer(initialState,
  on(appActions.fetchUser, state => { console.log('fetchUser'); return state; }),
  on(appActions.fetchUserSuccess, state => { console.log('fetchUserSuccess'); return state; }),
  on(appActions.fetchUserFail, state => { console.log('fetchUserFail'); return state; }),
);
