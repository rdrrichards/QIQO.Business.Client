import { ProductState } from '.';
import * as productActions from './product.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: ProductState = {
  user: ''
};

const productReducer = createReducer(initialState,
  on(productActions.fetchProduct, state => { console.log('fetchProduct'); return state; }),
  on(productActions.fetchProductSuccess, state => { console.log('fetchProductSuccess'); return state; }),
  on(productActions.fetchProductFail, state => { console.log('fetchProductFail'); return state; }),
);

export function reducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
