import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as productActions from './product.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/shared/product.service';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) {}

  loadProduct$ = createEffect(() => this.actions$.pipe(
    ofType(productActions.fetchProduct),
    mergeMap(() => this.productService.getProduct('').pipe(
        map(user => (productActions.fetchProductSuccess(user)),
        catchError(err => of(productActions.fetchProductFail(err.message)))
        )
      ))
  ));
}
