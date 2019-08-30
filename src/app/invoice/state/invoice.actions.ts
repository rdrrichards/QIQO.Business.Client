import { createAction, props, union } from '@ngrx/store';

export const fetchUser = createAction('[Invoice] Fetch User');
export const fetchUserSuccess = createAction(
  '[Invoice] Fetch User Success', props<{}>()
);
export const fetchUserFail = createAction(
  '[Invoice] Fetch User Fail', props<{ message: string }>()
);

const actions = union({
  fetchUser, fetchUserSuccess, fetchUserFail,
});
export type InvoiceActionsUnion = typeof actions;
