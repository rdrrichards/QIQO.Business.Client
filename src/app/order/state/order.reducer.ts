import { OrderState } from '.';
import * as orderActions from './order.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: OrderState = {

};

const orderReducer = createReducer(initialState,
  on(orderActions.fetchOrder, state => { console.log('fetchOrder'); return state; }),
  on(orderActions.fetchOrderSuccess, state => { console.log('fetchOrderSuccess'); return state; }),
  on(orderActions.fetchOrderFail, state => { console.log('fetchOrderFail'); return state; }),
);

export function reducer(state: OrderState | undefined, action: Action) {
  return orderReducer(state, action);
}
