import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as orderActions from './order.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { OrderService } from 'src/app/shared/order.service';

@Injectable()
export class OrderEffects {
  constructor(private actions$: Actions, private orderService: OrderService) {}

  loadOrder$ = createEffect(() => this.actions$.pipe(
    ofType(orderActions.fetchOrder),
    mergeMap(() => this.orderService.getOrder('').pipe(
        map(user => (orderActions.fetchOrderSuccess(user)),
        catchError(err => of(orderActions.fetchOrderFail(err.message)))
        )
      ))
  ));
}
