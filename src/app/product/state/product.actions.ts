import { createAction, props, union } from '@ngrx/store';
import { Product } from 'src/app/models';
import { ProductSearchSpecification } from '../models/product-search-specification';

export const fetchProducts = createAction('[Product] Fetch Products');
export const fetchProductsSuccess = createAction(
  '[Product] Fetch Products Success', props<{payload: Product[]}>()
);
export const fetchProductsFail = createAction(
  '[Product] Fetch Products Fail', props<{ message: string }>()
);

export const fetchProduct = createAction('[Product] Fetch Product', props<{ payload: number }>());
export const fetchProductSuccess = createAction(
  '[Product] Fetch Product Success', props<{payload: Product}>()
);
export const fetchProductFail = createAction(
  '[Product] Fetch Product Fail', props<{ message: string }>()
);

export const findProduct = createAction('[Product] Find Product', props<{ payload: ProductSearchSpecification }>());
export const findProductSuccess = createAction(
  '[Product] Find Product Success', props<{ payload: Product[]}>()
);
export const findProductFail = createAction(
  '[Product] Find Product Fail', props<{ message: string }>()
);

export const fetchRecentProducts = createAction('[Product] Fetch Recent Products');
export const fetchRecentProductsSuccess = createAction(
  '[Product] Fetch Recent Products Success', props<{payload: Product[]}>()
);
export const fetchRecentProductsFail = createAction(
  '[Product] Fetch Recent Products Fail', props<{ message: string }>()
);


const actions = union({
  fetchProducts, fetchProductsSuccess, fetchProductsFail,
  fetchProduct, fetchProductSuccess, fetchProductFail,
  findProduct, findProductSuccess, findProductFail,
  fetchRecentProducts, fetchRecentProductsSuccess, fetchRecentProductsFail,
});
export type ProductActionsUnion = typeof actions;
