import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as invoiceActions from './invoice.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { InvoiceService } from 'src/app/shared/invoice.service';

@Injectable()
export class InvoiceEffects {
  constructor(private actions$: Actions, private invoiceService: InvoiceService) {}

  loadInvoice$ = createEffect(() => this.actions$.pipe(
    ofType(invoiceActions.fetchInvoice),
    mergeMap(action => this.invoiceService.getInvoice(action.payload).pipe(
        map(invoice => (invoiceActions.fetchInvoiceSuccess({ payload: invoice})),
        catchError(err => of(invoiceActions.fetchInvoiceFail(err.message)))
        )
      ))
  ));
  findInvoice$ = createEffect(() => this.actions$.pipe(
    ofType(invoiceActions.findInvoices),
    mergeMap(action => this.invoiceService.findInvoice(action.term).pipe(
        map(invoices => (invoiceActions.findInvoicesSuccess({ payload: invoices })),
        catchError(err => of(invoiceActions.findInvoicesFail(err.message)))
        )
      ))
  ));
  loadRecentInvoices$ = createEffect(() => this.actions$.pipe(
    ofType(invoiceActions.fetchRecentInvoices),
    mergeMap(action => this.invoiceService.getRecentInvoices().pipe(
        map(invoices => (invoiceActions.fetchRecentInvoicesSuccess({ payload: invoices })),
        catchError(err => of(invoiceActions.fetchRecentInvoicesFail(err.message)))
        )
      ))
  ));
  saveInvoice$ = createEffect(() => this.actions$.pipe(
    ofType(invoiceActions.saveInvoice),
    mergeMap(action => this.invoiceService.saveInvoice(action).pipe(
        map(invoice => (invoiceActions.saveInvoiceSuccess(invoice)),
        catchError(err => of(invoiceActions.saveInvoiceFail(err.message)))
        )
      ))
  ));
}
