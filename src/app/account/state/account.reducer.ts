import { AccountState } from '.';
import * as accountActions from './account.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: AccountState = {
  user: ''
};

const accountReducer = createReducer(initialState,
  on(accountActions.fetchUser, state => { console.log('fetchUser'); return state; }),
  on(accountActions.fetchUserSuccess, state => { console.log('fetchUserSuccess'); return state; }),
  on(accountActions.fetchUserFail, state => { console.log('fetchUserFail'); return state; }),
);

export function reducer(state: AccountState | undefined, action: Action) {
  return accountReducer(state, action);
}
