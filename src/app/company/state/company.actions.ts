import { createAction, props, union } from '@ngrx/store';

export const fetchCompany = createAction('[Company] Fetch Company');
export const fetchCompanySuccess = createAction(
  '[Company] Fetch Company Success', props<{}>()
);
export const fetchCompanyFail = createAction(
  '[Company] Fetch Company Fail', props<{ message: string }>()
);

const actions = union({
  fetchCompany, fetchCompanySuccess, fetchCompanyFail,
});
export type CompanyActionsUnion = typeof actions;
