import { createAction, props, union } from '@ngrx/store';

export const fetchUser = createAction('[Order] Fetch User');
export const fetchUserSuccess = createAction(
  '[Order] Fetch User Success', props<{}>()
);
export const fetchUserFail = createAction(
  '[Order] Fetch User Fail', props<{ message: string }>()
);

const actions = union({
  fetchUser, fetchUserSuccess, fetchUserFail,
});
export type OrderActionsUnion = typeof actions;
