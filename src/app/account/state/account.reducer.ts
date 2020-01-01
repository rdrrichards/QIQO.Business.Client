import { AccountState } from '.';
import * as accountActions from './account.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: AccountState = {
  currentAccount: null,
  foundAccounts: [],
  recentAccounts: [],
  allAccounts: []
};

export const selectCurrentAccount = (state: AccountState) => state.currentAccount;
export const selectFoundAccounts = (state: AccountState) => state.foundAccounts;
export const selectRecentAccounts = (state: AccountState) => state.recentAccounts;
export const selectAllAccounts = (state: AccountState) => state.allAccounts;

const accountReducer = createReducer(initialState,
  on(accountActions.fetchAccountsSuccess, (state, { payload }) => ({ ...state, allAccounts: payload })),
  on(accountActions.fetchAccountsFail, state => ({ ...state, allAccounts: [] })),

  on(accountActions.fetchAccountSuccess, (state, { payload }) => ({ ...state, currentAccount: payload })),
  on(accountActions.fetchAccountFail, state => ({ ...state, currentAccount: null })),

  on(accountActions.findAccountSuccess, (state, { payload }) => ({ ...state, foundAccounts: payload })),
  on(accountActions.findAccountFail, state => ({ ...state, foundAccounts: null })),

  on(accountActions.fetchRecentAccountsSuccess, (state, { payload }) => ({ ...state, recentAccounts: payload })),
  on(accountActions.fetchRecentAccountsFail, state => ({ ...state, recentAccounts: [] })),
);

export function reducer(state: AccountState | undefined, action: Action) {
  return accountReducer(state, action);
}
