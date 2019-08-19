import { Employee } from './employee';
import { EntityAttribute } from './entity';
import { Address } from './address';
import { Ledger } from './ledger';
import { ChartOfAccount } from './chart-of-accounts';

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
    glAccounts: ChartOfAccount[];
    ledgers: Ledger[];
    companyAttributes: EntityAttribute[];
    companyAddresses: Address[];
}
