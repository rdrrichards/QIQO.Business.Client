import { InvoiceState } from '.';
import * as invoiceActions from './invoice.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: InvoiceState = {
  user: ''
};

const invoiceReducer = createReducer(initialState,
  on(invoiceActions.fetchUser, state => { console.log('fetchUser'); return state; }),
  on(invoiceActions.fetchUserSuccess, state => { console.log('fetchUserSuccess'); return state; }),
  on(invoiceActions.fetchUserFail, state => { console.log('fetchUserFail'); return state; }),
);

export function reducer(state: InvoiceState | undefined, action: Action) {
  return invoiceReducer(state, action);
}
