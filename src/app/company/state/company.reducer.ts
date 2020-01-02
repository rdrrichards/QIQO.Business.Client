import { CompanyState } from '.';
import * as companyActions from './company.actions';
import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: CompanyState = {
  currentCompany: null,
  foundCompanies: []
};

export const selectFeature = createFeatureSelector<CompanyState>('companyState');

export const selectCurrentCompany = createSelector(selectFeature, (state: CompanyState) => state.currentCompany);
export const selectFoundCompanys = createSelector(selectFeature, (state: CompanyState) => state.foundCompanies);

const companyReducer = createReducer(initialState,
  on(companyActions.fetchCompanySuccess, (state, { payload }) => ({ ...state, currentCompany: payload })),
  on(companyActions.fetchCompanyFail, state => ({ ...state, currentCompany: null })),

  on(companyActions.findCompanySuccess, (state, { payload }) => ({ ...state, foundCompanys: payload })),
  on(companyActions.findCompanyFail, state => ({ ...state, foundCompanies: null })),
);

export function reducer(state: CompanyState | undefined, action: Action) {
  return companyReducer(state, action);
}
