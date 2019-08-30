import { createAction, props, union } from '@ngrx/store';

export const fetchUser = createAction('[Company] Fetch User');
export const fetchUserSuccess = createAction(
  '[Company] Fetch User Success', props<{}>()
);
export const fetchUserFail = createAction(
  '[Company] Fetch User Fail', props<{ message: string }>()
);

const actions = union({
  fetchUser, fetchUserSuccess, fetchUserFail,
});
export type CompanyActionsUnion = typeof actions;
