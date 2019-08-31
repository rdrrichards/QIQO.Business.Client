import { createAction, props, union } from '@ngrx/store';

export const fetchAccount = createAction('[Account] Fetch Account');
export const fetchAccountSuccess = createAction(
  '[Account] Fetch Account Success', props<{}>()
);
export const fetchAccountFail = createAction(
  '[Account] Fetch Account Fail', props<{ message: string }>()
);

const actions = union({
  fetchAccount, fetchAccountSuccess, fetchAccountFail,
});
export type AccountActionsUnion = typeof actions;
