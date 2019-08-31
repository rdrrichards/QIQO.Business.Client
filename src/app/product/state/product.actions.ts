import { createAction, props, union } from '@ngrx/store';

export const fetchProduct = createAction('[Product] Fetch Product');
export const fetchProductSuccess = createAction(
  '[Product] Fetch Product Success', props<{}>()
);
export const fetchProductFail = createAction(
  '[Product] Fetch Product Fail', props<{ message: string }>()
);

const actions = union({
  fetchProduct, fetchProductSuccess, fetchProductFail,
});
export type ProductActionsUnion = typeof actions;
