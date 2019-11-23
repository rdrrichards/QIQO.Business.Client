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
    mergeMap(action => this.orderService.getOrder(action.payload).pipe(
        map(order => (orderActions.fetchOrderSuccess({ payload: order})),
        catchError(err => of(orderActions.fetchOrderFail(err.message)))
        )
      ))
  ));
  findOrder$ = createEffect(() => this.actions$.pipe(
    ofType(orderActions.findOrders),
    mergeMap(action => this.orderService.findOrder(action.term).pipe(
        map(orders => (orderActions.findOrdersSuccess({ payload: orders })),
        catchError(err => of(orderActions.findOrdersFail(err.message)))
        )
      ))
  ));
  loadRecentOrders$ = createEffect(() => this.actions$.pipe(
    ofType(orderActions.fetchRecentOrders),
    mergeMap(action => this.orderService.getRecentOrders().pipe(
        map(orders => (orderActions.fetchRecentOrdersSuccess({ payload: orders })),
        catchError(err => of(orderActions.fetchRecentOrdersFail(err.message)))
        )
      ))
  ));
  saveOrder$ = createEffect(() => this.actions$.pipe(
    ofType(orderActions.saveOrder),
    mergeMap(action => this.orderService.saveOrder(action).pipe(
        map(order => (orderActions.saveOrderSuccess(order)),
        catchError(err => of(orderActions.saveOrderFail(err.message)))
        )
      ))
  ));
}
