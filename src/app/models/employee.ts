import { Person } from './person';
import { PersonType } from './enums';

export interface Employee extends Person {
    parentEmployeeKey: number;
    // public List<Company> Companies { get; set; } = new List<Company>();
    roleInCompany: string;
    entityPersonKey: number;
    startDate: Date;
    endDate: Date;
    comment: string;
    companyRoleType: PersonType;
}
