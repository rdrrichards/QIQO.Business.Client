import { OrderState } from '.';
import * as orderActions from './order.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: OrderState = {
  user: ''
};

const orderReducer = createReducer(initialState,
  on(orderActions.fetchUser, state => { console.log('fetchUser'); return state; }),
  on(orderActions.fetchUserSuccess, state => { console.log('fetchUserSuccess'); return state; }),
  on(orderActions.fetchUserFail, state => { console.log('fetchUserFail'); return state; }),
);

export function reducer(state: OrderState | undefined, action: Action) {
  return orderReducer(state, action);
}
