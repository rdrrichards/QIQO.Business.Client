import { Employee } from './employee';
import { EntityAttribute } from './entity';
import { Address } from './address';

export interface Company {
    companyKey: number;
    companyCode: string;
    companyName: string;
    companyDesc: string;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;

    employees: Employee[];
    // GLAccounts: ChartOfAccount[];
    // ledgers: Ledger[];
    companyAttributes: EntityAttribute[];
    companyAddresses: Address[];
}
