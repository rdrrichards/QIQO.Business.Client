import { createAction, props, union } from '@ngrx/store';
import { Company } from 'src/app/models';
import { CompanySearchSpecification } from '../models/company-search-specification';

export const fetchCompany = createAction('[Company] Fetch Company', props<{ payload: number }>());
export const fetchCompanySuccess = createAction(
  '[Company] Fetch Company Success', props<{payload: Company}>()
);
export const fetchCompanyFail = createAction(
  '[Company] Fetch Company Fail', props<{ message: string }>()
);

export const findCompany = createAction('[Company] Find Company', props<{ payload: CompanySearchSpecification }>());
export const findCompanySuccess = createAction(
  '[Company] Find Company Success', props<{ payload: Company[]}>()
);
export const findCompanyFail = createAction(
  '[Company] Find Company Fail', props<{ message: string }>()
);

const actions = union({
  fetchCompany, fetchCompanySuccess, fetchCompanyFail,
  findCompany, findCompanySuccess, findCompanyFail,
});
export type CompanyActionsUnion = typeof actions;
