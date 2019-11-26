import { DashboardState } from '.';
import * as dashboardActions from './dashboard.actions';
import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: DashboardState = {
  dashboardItems: []
};

export const selectFeature = createFeatureSelector<DashboardState>('dashboardState');
export const selectOverviewDashboardItems = createSelector(
  selectFeature,
  (state: DashboardState) => state.dashboardItems.filter(i => i.type === 'overview')
);
export const selectTableDashboardItems = createSelector(
  selectFeature,
  (state: DashboardState) => state.dashboardItems.filter(i => i.type === 'table')
);

const dashboardReducer = createReducer(initialState,
  on(dashboardActions.fetchDashboardItemsSuccess, (state, { payload }) => ({ ...state, allAccounts: payload })),
  on(dashboardActions.fetchDashboardItemsFail, state => ({ ...state, allAccounts: [] })),
);

export function reducer(state: DashboardState | undefined, action: Action) {
  return dashboardReducer(state, action);
}
