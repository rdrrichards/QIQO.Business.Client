import { Company } from 'src/app/models';

export interface CompanyState {
  currentCompany: Company;
  foundCompanies?: Company[];
}
