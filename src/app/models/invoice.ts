import { Person } from './person';
import { InvoiceStatus, InvoiceItemStatus } from './enums';
import { Address } from './address';
import { Product } from './product';

export interface Invoice {
    invoiceKey: number;
    fromEntityKey: number;
    accountKey: number;
    account: Account;
    ccountContactKey: number;
    invoiceNumber: string;
    invoiceAccountContact: Person;
    invoiceItemCount: number;
    invoiceValueSum: number;

    orderEntryDate?: Date;
    invoiceEntryDate: Date;
    invoiceStatusDate: Date;
    orderShipDate?: Date;
    invoiceCompleteDate?: Date;

    // public int SalesRepKey: ;
    // public Representative SalesRep: ; = new Representative(QIQOPersonType.SalesRepresentative);
    // public int AccountRepKey: ;
    // public Representative AccountRep: ; = new Representative(QIQOPersonType.AccountRepresentative);

    invoiceStatus: InvoiceStatus;
    invoiceStatusData: InvoiceStatusData;

    invoiceItems: InvoiceItem[];
    comments: Comment[];
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}

export interface InvoiceItem {
    invoiceItemKey: number;
    fromEntityKey: number;
    invoiceKey: number;
    invoiceItemSeq: number;
    productKey: number;
    productName: string;
    productDesc: string;
    invoiceItemQuantity: number;

    orderItemShipToAddress: Address;
    orderItemBillToAddress: Address;

    // public DateTime InvoiceEntry
    orderItemShipDate?: Date;
    invoiceItemCompleteDate?: Date;

    itemPricePer: number;
    invoiceItemLineSum: number;

    // public Representative SalesRep: ; = new Representative(QIQOPersonType.SalesRepresentative);
    // public Representative AccountRep: ; = new Representative(QIQOPersonType.AccountRepresentative);

    invoiceItemStatus: InvoiceItemStatus;
    invoiceItemStatusData: InvoiceItemStatusData;

    invoiceItemProduct: Product;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}

export interface InvoiceItemStatusData {
    invoiceItemStatusKey: number;
    invoiceItemStatusType: string;
    invoiceItemStatusCode: string;
    invoiceItemStatusName: string;
    invoiceItemStatusDesc: string;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}

export interface InvoiceStatusData {
    invoiceStatusKey: number;
    invoiceStatusCode: string;
    invoiceStatusName: string;
    invoiceStatusDesc: string;
    invoiceStatusType: string;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}


