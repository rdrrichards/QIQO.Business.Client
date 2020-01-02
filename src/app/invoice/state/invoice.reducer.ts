import { InvoiceState } from '.';
import * as invoiceActions from './invoice.actions';
import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: InvoiceState = {
  currentInvoice: null,
  foundInvoices: [],
  openInvoices: [],
  recentInvoices: []
};

export const selectFeature = createFeatureSelector<InvoiceState>('invoiceState');

export const selectCurrentInvoice = createSelector(selectFeature, (state: InvoiceState) => state.currentInvoice);
export const selectFoundInvoices = createSelector(selectFeature, (state: InvoiceState) => state.foundInvoices);
export const selectRecentInvoices = createSelector(selectFeature, (state: InvoiceState) => state.recentInvoices);
export const selectOpenInvoices = createSelector(selectFeature, (state: InvoiceState) => state.openInvoices);

const invoiceReducer = createReducer(initialState,
  on(invoiceActions.fetchInvoiceSuccess, (state, { payload }) => ({ ...state, currentInvoice: payload })),
  on(invoiceActions.fetchInvoiceFail, state => ({ ...state, currentInvoice: null })),

  on(invoiceActions.findInvoicesSuccess, (state, { payload }) => ({ ...state, foundInvoices: payload })),
  on(invoiceActions.findInvoicesFail, state => ({ ...state, foundInvoices: null })),

  on(invoiceActions.fetchOpenInvoicesSuccess, (state, { payload }) => ({ ...state, openInvoices: payload })),
  on(invoiceActions.fetchOpenInvoicesFail, state => ({ ...state, openInvoices: null })),

  on(invoiceActions.fetchRecentInvoicesSuccess, (state, { payload }) => ({ ...state, recentInvoices: payload })),
  on(invoiceActions.fetchRecentInvoicesFail, state => ({ ...state, recentInvoices: [] })),
);

export function reducer(state: InvoiceState | undefined, action: Action) {
  return invoiceReducer(state, action);
}
