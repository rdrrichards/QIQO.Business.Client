import { EntityType } from './enums';

export interface Ledger {
    ledgerKey: number;
    companyKey: number;
    ledgeCode: string;
    ledgeName: string;
    ledgeDesc: string;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
    ledgerTxns: LedgerTxn[];
}

export interface LedgerTxn {
    ledgerTxnKey: number;
    ledgerKey: number;
    comment: string;
    accountFrom: string;
    accountTo: string;
    entryDate: Date;
    postDate: Date;
    credit: number;
    debit: number;
    entityKey: number;
    entityType: EntityType;
    ledgerTxnNum: number;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}
