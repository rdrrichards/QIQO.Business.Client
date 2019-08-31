import { AccountState } from '.';
import * as accountActions from './account.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: AccountState = {
  user: ''
};

const accountReducer = createReducer(initialState,
  on(accountActions.fetchAccount, state => { console.log('fetchAccount'); return state; }),
  on(accountActions.fetchAccountSuccess, state => { console.log('fetchAccountSuccess'); return state; }),
  on(accountActions.fetchAccountFail, state => { console.log('fetchAccountFail'); return state; }),
);

export function reducer(state: AccountState | undefined, action: Action) {
  return accountReducer(state, action);
}
