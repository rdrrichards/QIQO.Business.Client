import { createAction, props, union } from '@ngrx/store';
import { AccountSearchSpecification } from '../models/account-search-specification';
import { Account } from '../../models/account';

export const fetchAccounts = createAction('[Account] Fetch Accounts');
export const fetchAccountsSuccess = createAction(
  '[Account] Fetch Accounts Success', props<{payload: Account[]}>()
);
export const fetchAccountsFail = createAction(
  '[Account] Fetch Accounts Fail', props<{ message: string }>()
);

export const fetchAccount = createAction('[Account] Fetch Account', props<{ payload: number }>());
export const fetchAccountSuccess = createAction(
  '[Account] Fetch Account Success', props<{payload: Account}>()
);
export const fetchAccountFail = createAction(
  '[Account] Fetch Account Fail', props<{ message: string }>()
);

export const findAccount = createAction('[Account] Find Account', props<{ payload: AccountSearchSpecification }>());
export const findAccountSuccess = createAction(
  '[Account] Find Account Success', props<{ payload: Account[]}>()
);
export const findAccountFail = createAction(
  '[Account] Find Account Fail', props<{ message: string }>()
);

export const fetchRecentAccounts = createAction('[Account] Fetch Recent Accounts');
export const fetchRecentAccountsSuccess = createAction(
  '[Account] Fetch Recent Accounts Success', props<{payload: Account[]}>()
);
export const fetchRecentAccountsFail = createAction(
  '[Account] Fetch Recent Accounts Fail', props<{ message: string }>()
);


const actions = union({
  fetchAccounts, fetchAccountsSuccess, fetchAccountsFail,
  fetchAccount, fetchAccountSuccess, fetchAccountFail,
  findAccount, findAccountSuccess, findAccountFail,
  fetchRecentAccounts, fetchRecentAccountsSuccess, fetchRecentAccountsFail,
});
export type AccountActionsUnion = typeof actions;
