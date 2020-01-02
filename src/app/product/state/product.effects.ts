import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as productActions from './product.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/shared/product.service';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) {}

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(productActions.fetchProducts),
    mergeMap(action => this.productService.getProducts().pipe(
        map(products => (productActions.fetchProductsSuccess({ payload: products })),
        catchError(err => of(productActions.fetchProductsFail(err.message)))
        )
      ))
  ));
  loadProduct$ = createEffect(() => this.actions$.pipe(
    ofType(productActions.fetchProduct),
    mergeMap(action => this.productService.getProduct(action.payload).pipe(
        map(product => (productActions.fetchProductSuccess({ payload: product })),
        catchError(err => of(productActions.fetchProductFail(err.message)))
        )
      ))
  ));
  // findProduct$ = createEffect(() => this.actions$.pipe(
  //   ofType(productActions.findProduct),
  //   mergeMap(action => this.productService.findProduct(action.payload.searchTerm).pipe(
  //       map(products => (productActions.findProductSuccess({ payload: products })),
  //       catchError(err => of(productActions.fetchProductFail(err.message)))
  //       )
  //     ))
  // ));
  loadRecentProducts$ = createEffect(() => this.actions$.pipe(
    ofType(productActions.fetchProducts),
    mergeMap(action => this.productService.getRecentProducts().pipe(
        map(products => (productActions.fetchRecentProductsSuccess({ payload: products })),
        catchError(err => of(productActions.fetchRecentProductsFail(err.message)))
        )
      ))
  ));
}
