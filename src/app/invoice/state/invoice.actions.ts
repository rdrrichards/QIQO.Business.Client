import { createAction, props, union } from '@ngrx/store';

export const fetchInvoice = createAction('[Invoice] Fetch Invoice');
export const fetchInvoiceSuccess = createAction(
  '[Invoice] Fetch Invoice Success', props<{}>()
);
export const fetchInvoiceFail = createAction(
  '[Invoice] Fetch Invoice Fail', props<{ message: string }>()
);

const actions = union({
  fetchInvoice, fetchInvoiceSuccess, fetchInvoiceFail,
});
export type InvoiceActionsUnion = typeof actions;
