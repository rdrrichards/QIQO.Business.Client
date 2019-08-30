import { createAction, props, union } from '@ngrx/store';

export const fetchUser = createAction('[Product] Fetch User');
export const fetchUserSuccess = createAction(
  '[Product] Fetch User Success', props<{}>()
);
export const fetchUserFail = createAction(
  '[Product] Fetch User Fail', props<{ message: string }>()
);

const actions = union({
  fetchUser, fetchUserSuccess, fetchUserFail,
});
export type ProductActionsUnion = typeof actions;
