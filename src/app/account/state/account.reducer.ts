import { AccountState } from '.';
import * as accountActions from './account.actions';
import { createReducer, on, Action, createSelector, createFeatureSelector } from '@ngrx/store';

export const initialState: AccountState = {
  currentAccount: null,
  foundAccounts: [],
  recentAccounts: [],
  allAccounts: []
};

export const selectFeature = createFeatureSelector<AccountState>('accountState');

export const selectCurrentAccount = createSelector(selectFeature, (state: AccountState) => state.currentAccount);
export const selectFoundAccounts = createSelector(selectFeature, (state: AccountState) => state.foundAccounts);
export const selectRecentAccounts = createSelector(selectFeature, (state: AccountState) => state.recentAccounts);
export const selectAllAccounts = createSelector(selectFeature, (state: AccountState) => state.allAccounts);

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
