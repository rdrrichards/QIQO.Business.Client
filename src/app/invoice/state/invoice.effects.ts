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
    mergeMap(() => this.invoiceService.getInvoice('').pipe(
        map(user => (invoiceActions.fetchInvoiceSuccess(user)),
        catchError(err => of(invoiceActions.fetchInvoiceFail(err.message)))
        )
      ))
  ));
}
