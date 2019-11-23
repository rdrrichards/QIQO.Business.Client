import { createAction, props, union } from '@ngrx/store';
import { Order } from 'src/app/models';

export const fetchOrder = createAction('[Order] Fetch Order', props<{ payload: number }>());
export const fetchOrderSuccess = createAction(
  '[Order] Fetch Order Success', props<{ payload: Order }>()
);
export const fetchOrderFail = createAction(
  '[Order] Fetch Order Fail', props<{ message: string }>()
);

export interface FindOrdersPayload { companyKey: number; term: string; }
export const findOrders = createAction('[Order] Find Orders', (payload: FindOrdersPayload) => payload);
export const findOrdersSuccess = createAction(
  '[Order] Find Orders Success', props<{ payload: Order[] }>()
);
export const findOrdersFail = createAction(
  '[Order] Find Orders Fail', props<{ message: string }>()
);

export interface OpenOrdersPayload { companyKey: number; }
export const fetchOpenOrders = createAction('[Order] Fetch Open Orders', (payload: OpenOrdersPayload) => payload);
export const fetchOpenOrdersSuccess = createAction(
  '[Order] Fetch Open Orders Success', props<{ payload: Order[] }>()
);
export const fetchOpenOrdersFail = createAction(
  '[Order] Fetch Open Orders Fail', props<{ message: string }>()
);

export interface RecentOrdersPayload { companyKey: number; user: string; }
export const fetchRecentOrders = createAction('[Order] Fetch Recent Orders', (payload: RecentOrdersPayload) => payload);
export const fetchRecentOrdersSuccess = createAction(
  '[Order] Fetch Recent Orders Success', props<{ payload: Order[] }>()
);
export const fetchRecentOrdersFail = createAction(
  '[Order] Fetch Recent Orders Fail', props<{ message: string }>()
);

export const saveOrder = createAction('[Order] Save Order', (payload: Order) => payload);
export const saveOrderSuccess = createAction(
  '[Order] Save Order Success', props<Order>()
);
export const saveOrderFail = createAction(
  '[Order] Save Order Fail', props<{ message: string }>()
);

export const cancelOrder = createAction('[Order] Cancel Order', (payload: Order) => payload);
export const cancelOrderSuccess = createAction(
  '[Order] Cancel Order Success', props<Order>()
);
export const cancelOrderFail = createAction(
  '[Order] Cancel Order Fail', props<{ message: string }>()
);

const actions = union({
  fetchOrder, fetchOrderSuccess, fetchOrderFail,
  findOrders, findOrdersSuccess, findOrdersFail,
  fetchOpenOrders, fetchOpenOrdersSuccess, fetchOpenOrdersFail,
  fetchRecentOrders, fetchRecentOrdersSuccess, fetchRecentOrdersFail,
  saveOrder, saveOrderSuccess, saveOrderFail,
  cancelOrder, cancelOrderSuccess, cancelOrderFail,
});
export type OrderActionsUnion = typeof actions;
