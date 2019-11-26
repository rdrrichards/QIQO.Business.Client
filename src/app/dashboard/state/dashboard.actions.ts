import { createAction, props, union } from '@ngrx/store';
import { DashboardItem } from 'src/app/models';

export const fetchDashboardItems = createAction('[Dashboard] Fetch Dashboard Items');
export const fetchDashboardItemsSuccess = createAction(
  '[Dashboard] Fetch Dashboard Items Success', props<{ payload: DashboardItem[] }>()
);
export const fetchDashboardItemsFail = createAction(
  '[Dashboard] Fetch Dashboard Items Fail', props<{ message: string }>()
);

const actions = union({
  fetchDashboardItems, fetchDashboardItemsSuccess, fetchDashboardItemsFail,
});
export type DashboardActionsUnion = typeof actions;
