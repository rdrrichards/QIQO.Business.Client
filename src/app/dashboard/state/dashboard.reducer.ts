import { DashboardState } from '.';
import * as dashboardActions from './dashboard.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: DashboardState = {
  user: ''
};

const dashboardReducer = createReducer(initialState,
  on(dashboardActions.fetchUser, state => { console.log('fetchUser'); return state; }),
  on(dashboardActions.fetchUserSuccess, state => { console.log('fetchUserSuccess'); return state; }),
  on(dashboardActions.fetchUserFail, state => { console.log('fetchUserFail'); return state; }),
);

export function reducer(state: DashboardState | undefined, action: Action) {
  return dashboardReducer(state, action);
}
