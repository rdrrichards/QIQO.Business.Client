import { CompanyState } from '.';
import * as companyActions from './company.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: CompanyState = {
  user: ''
};

const companyReducer = createReducer(initialState,
  on(companyActions.fetchCompany, state => { console.log('fetchCompany'); return state; }),
  on(companyActions.fetchCompanySuccess, state => { console.log('fetchCompanySuccess'); return state; }),
  on(companyActions.fetchCompanyFail, state => { console.log('fetchCompanyFail'); return state; }),
);

export function reducer(state: CompanyState | undefined, action: Action) {
  return companyReducer(state, action);
}
