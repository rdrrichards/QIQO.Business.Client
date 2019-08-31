import { AdminState } from '.';
import * as adminActions from './admin.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: AdminState = {
  user: ''
};

const adminReducer = createReducer(initialState,
  on(adminActions.fetchUser, state => { console.log('fetchUser'); return state; }),
  on(adminActions.fetchUserSuccess, state => { console.log('fetchUserSuccess'); return state; }),
  on(adminActions.fetchUserFail, state => { console.log('fetchUserFail'); return state; }),
);

export function reducer(state: AdminState | undefined, action: Action) {
  return adminReducer(state, action);
}
