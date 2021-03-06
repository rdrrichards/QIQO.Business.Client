import { createAction, props, union } from '@ngrx/store';
import { User } from '../models/user';

export interface LoginPayload { userName: string; password: string; }

export const fetchUser = createAction('[Application] Fetch User', (login: LoginPayload) => login);
export const fetchUserSuccess = createAction(
  '[Application] Fetch User Success', props<User>()
);
export const fetchUserFail = createAction(
  '[Application] Fetch User Fail', props<{ message: string }>()
);

const actions = union({
  fetchUser, fetchUserSuccess, fetchUserFail,
});
export type AppActionsUnion = typeof actions;
