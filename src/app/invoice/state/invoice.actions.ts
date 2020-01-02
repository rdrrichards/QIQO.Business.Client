import { createAction, props, union } from '@ngrx/store';
import { Invoice, SearchResult } from 'src/app/models';

export const fetchInvoice = createAction('[Invoice] Fetch Invoice', props<{ payload: number }>());
export const fetchInvoiceSuccess = createAction(
  '[Invoice] Fetch Invoice Success', props<{ payload: Invoice }>()
);
export const fetchInvoiceFail = createAction(
  '[Invoice] Fetch Invoice Fail', props<{ message: string }>()
);

export interface FindInvoicesPayload { companyKey: number; term: string; }
export const findInvoices = createAction('[Invoice] Find Invoices', (payload: FindInvoicesPayload) => payload);
export const findInvoicesSuccess = createAction(
  '[Invoice] Find Invoices Success', props<{ payload: SearchResult[] }>()
);
export const findInvoicesFail = createAction(
  '[Invoice] Find Invoices Fail', props<{ message: string }>()
);

export interface OpenInvoicesPayload { companyKey: number; }
export const fetchOpenInvoices = createAction('[Invoice] Fetch Open Invoices', (payload: OpenInvoicesPayload) => payload);
export const fetchOpenInvoicesSuccess = createAction(
  '[Invoice] Fetch Open Invoices Success', props<{ payload: Invoice[] }>()
);
export const fetchOpenInvoicesFail = createAction(
  '[Invoice] Fetch Open Invoices Fail', props<{ message: string }>()
);

export interface RecentInvoicesPayload { companyKey: number; user: string; }
export const fetchRecentInvoices = createAction('[Invoice] Fetch Recent Invoices', (payload: RecentInvoicesPayload) => payload);
export const fetchRecentInvoicesSuccess = createAction(
  '[Invoice] Fetch Recent Invoices Success', props<{ payload: Invoice[] }>()
);
export const fetchRecentInvoicesFail = createAction(
  '[Invoice] Fetch Recent Invoices Fail', props<{ message: string }>()
);

export const saveInvoice = createAction('[Invoice] Save Invoice', (payload: Invoice) => payload);
export const saveInvoiceSuccess = createAction(
  '[Invoice] Save Invoice Success', props<Invoice>()
);
export const saveInvoiceFail = createAction(
  '[Invoice] Save Invoice Fail', props<{ message: string }>()
);

export const cancelInvoice = createAction('[Invoice] Cancel Invoice', (payload: Invoice) => payload);
export const cancelInvoiceSuccess = createAction(
  '[Invoice] Cancel Invoice Success', props<Invoice>()
);
export const cancelInvoiceFail = createAction(
  '[Invoice] Cancel Invoice Fail', props<{ message: string }>()
);

const actions = union({
  fetchInvoice, fetchInvoiceSuccess, fetchInvoiceFail,
  findInvoices, findInvoicesSuccess, findInvoicesFail,
  fetchOpenInvoices, fetchOpenInvoicesSuccess, fetchOpenInvoicesFail,
  fetchRecentInvoices, fetchRecentInvoicesSuccess, fetchRecentInvoicesFail,
  saveInvoice, saveInvoiceSuccess, saveInvoiceFail,
  cancelInvoice, cancelInvoiceSuccess, cancelInvoiceFail,
});
export type InvoiceActionsUnion = typeof actions;
