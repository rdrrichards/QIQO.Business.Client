import { OrderState } from '.';
import * as orderActions from './order.actions';
import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: OrderState = {
  currentOrder: null,
  foundOrders: [],
  openOrders: [],
  recentOrders: []
};

export const selectFeature = createFeatureSelector<OrderState>('orderState');

export const selectCurrentOrder = createSelector(selectFeature, (state: OrderState) => state.currentOrder);
export const selectFoundOrders = createSelector(selectFeature, (state: OrderState) => state.foundOrders);
export const selectRecentOrders = createSelector(selectFeature, (state: OrderState) => state.recentOrders);
export const selectOpenOrders = createSelector(selectFeature, (state: OrderState) => state.openOrders);

const orderReducer = createReducer(initialState,
  on(orderActions.fetchOrderSuccess, (state, { payload }) => ({ ...state, currentOrder: payload })),
  on(orderActions.fetchOrderFail, state => ({ ...state, currentOrder: null })),

  on(orderActions.findOrdersSuccess, (state, { payload }) => ({ ...state, foundOrders: payload })),
  on(orderActions.findOrdersFail, state => ({ ...state, foundOrders: null })),

  on(orderActions.fetchOpenOrdersSuccess, (state, { payload }) => ({ ...state, openOrders: payload })),
  on(orderActions.fetchOpenOrdersFail, state => ({ ...state, openOrders: null })),

  on(orderActions.fetchRecentOrdersSuccess, (state, { payload }) => ({ ...state, recentOrders: payload })),
  on(orderActions.fetchRecentOrdersFail, state => ({ ...state, recentOrders: [] })),
);

export function reducer(state: OrderState | undefined, action: Action) {
  return orderReducer(state, action);
}
