import { ProductState } from '.';
import * as productActions from './product.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: ProductState = {
  user: ''
};

const productReducer = createReducer(initialState,
  on(productActions.fetchUser, state => { console.log('fetchUser'); return state; }),
  on(productActions.fetchUserSuccess, state => { console.log('fetchUserSuccess'); return state; }),
  on(productActions.fetchUserFail, state => { console.log('fetchUserFail'); return state; }),
);

export function reducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
