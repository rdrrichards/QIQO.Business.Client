import { createAction, props, union } from '@ngrx/store';

export const fetchUser = createAction('[Admin] Fetch User');
export const fetchUserSuccess = createAction(
  '[Admin] Fetch User Success', props<{}>()
);
export const fetchUserFail = createAction(
  '[Admin] Fetch User Fail', props<{ message: string }>()
);

const actions = union({
  fetchUser, fetchUserSuccess, fetchUserFail,
});
export type AdminActionsUnion = typeof actions;
