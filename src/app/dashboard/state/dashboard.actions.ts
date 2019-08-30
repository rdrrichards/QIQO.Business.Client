import { createAction, props, union } from '@ngrx/store';

export const fetchUser = createAction('[Dashboard] Fetch User');
export const fetchUserSuccess = createAction(
  '[Dashboard] Fetch User Success', props<{}>()
);
export const fetchUserFail = createAction(
  '[Dashboard] Fetch User Fail', props<{ message: string }>()
);

const actions = union({
  fetchUser, fetchUserSuccess, fetchUserFail,
});
export type DashboardActionsUnion = typeof actions;
