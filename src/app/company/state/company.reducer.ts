import { CompanyState } from '.';
import * as companyActions from './company.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: CompanyState = {
  user: ''
};

const companyReducer = createReducer(initialState,
  on(companyActions.fetchUser, state => { console.log('fetchUser'); return state; }),
  on(companyActions.fetchUserSuccess, state => { console.log('fetchUserSuccess'); return state; }),
  on(companyActions.fetchUserFail, state => { console.log('fetchUserFail'); return state; }),
);

export function reducer(state: CompanyState | undefined, action: Action) {
  return companyReducer(state, action);
}
