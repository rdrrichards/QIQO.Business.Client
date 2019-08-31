import { InvoiceState } from '.';
import * as invoiceActions from './invoice.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: InvoiceState = {
  user: ''
};

const invoiceReducer = createReducer(initialState,
  on(invoiceActions.fetchInvoice, state => { console.log('fetchInvoice'); return state; }),
  on(invoiceActions.fetchInvoiceSuccess, state => { console.log('fetchInvoiceSuccess'); return state; }),
  on(invoiceActions.fetchInvoiceFail, state => { console.log('fetchInvoiceFail'); return state; }),
);

export function reducer(state: InvoiceState | undefined, action: Action) {
  return invoiceReducer(state, action);
}
