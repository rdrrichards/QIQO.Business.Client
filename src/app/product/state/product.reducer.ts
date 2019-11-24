import { ProductState } from '.';
import * as productActions from './product.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: ProductState = {
  currentProduct: null,
  foundProducts: [],
  recentProducts: [],
  allProducts: []
};

const productReducer = createReducer(initialState,
  on(productActions.fetchProductsSuccess, (state, { payload }) => ({ ...state, allProducts: payload })),
  on(productActions.fetchProductsFail, state => ({ ...state, allProducts: [] })),

  on(productActions.fetchProductSuccess, (state, { payload }) => ({ ...state, currentProduct: payload })),
  on(productActions.fetchProductFail, state => ({ ...state, currentProduct: null })),

  on(productActions.findProductSuccess, (state, { payload }) => ({ ...state, foundProducts: payload })),
  on(productActions.findProductFail, state => ({ ...state, foundProducts: null })),

  on(productActions.fetchRecentProductsSuccess, (state, { payload }) => ({ ...state, recentProducts: payload })),
  on(productActions.fetchRecentProductsFail, state => ({ ...state, recentProducts: [] })),
);

export function reducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
