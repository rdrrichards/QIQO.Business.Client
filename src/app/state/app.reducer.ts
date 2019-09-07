import { AppState } from '.';
import * as appActions from './app.actions';
import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { User } from '../models';

export const initialState: AppState = {
  user: null // { name: null, roles: [] }
};

export const selectUser = (state: AppState) => state.user;
export const selectLoggedIn = (state) => (state.app.user && state.app.user.name) ? true : false;
// export const selectLoggedIn = createSelector(
//   selectUser,
//   (user: User) => {
//     console.log('user', user);
//     return (user && user.name) ? true : false;
//   }
// );

const appReducer = createReducer(initialState,
  on(appActions.fetchUser, state => { console.log('fetchUser'); return state; }),
  on(appActions.fetchUserSuccess, (state, userInfo) => ({ ...state, user: userInfo })),
  on(appActions.fetchUserFail, state => { console.log('fetchUserFail'); return state; }),
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
