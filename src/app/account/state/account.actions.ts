import { createAction, props, union } from '@ngrx/store';

export const fetchUser = createAction('[Account] Fetch User');
export const fetchUserSuccess = createAction(
  '[Account] Fetch User Success', props<{}>()
);
export const fetchUserFail = createAction(
  '[Account] Fetch User Fail', props<{ message: string }>()
);

const actions = union({
  fetchUser, fetchUserSuccess, fetchUserFail,
});
export type AccountActionsUnion = typeof actions;
