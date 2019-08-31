import { createAction, props, union } from '@ngrx/store';

export const fetchOrder = createAction('[Order] Fetch Order');
export const fetchOrderSuccess = createAction(
  '[Order] Fetch Order Success', props<{}>()
);
export const fetchOrderFail = createAction(
  '[Order] Fetch Order Fail', props<{ message: string }>()
);

const actions = union({
  fetchOrder, fetchOrderSuccess, fetchOrderFail,
});
export type OrderActionsUnion = typeof actions;
