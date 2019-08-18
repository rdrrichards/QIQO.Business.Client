import { Person } from './person';
import { OrderStatus, OrderItemStatus } from './enums';
import { Address } from './address';

export interface Order {
    orderKey: number;
    fromEntityKey: number;
    accountKey: number;
    account: Account;
    ccountContactKey: number;
    orderNumber: string;
    orderAccountContact: Person;
    orderItemCount: number;
    orderValueSum: number;

    orderEntryDate?: Date;
    orderStatusDate: Date;
    orderShipDate?: Date;
    orderCompleteDate?: Date;

    // public int SalesRepKey: ;
    // public Representative SalesRep: ; = new Representative(QIQOPersonType.SalesRepresentative);
    // public int AccountRepKey: ;
    // public Representative AccountRep: ; = new Representative(QIQOPersonType.AccountRepresentative);

    orderStatus: OrderStatus;
    orderStatusData: OrderStatusData;

    orderItems: OrderItem[];
    comments: Comment[];
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}

export interface OrderItem {
    orderItemKey: number;
    fromEntityKey: number;
    orderKey: number;
    orderItemSeq: number;
    productKey: number;
    productName: string;
    productDesc: string;
    orderItemQuantity: number;

    orderItemShipToAddress: Address;
    orderItemBillToAddress: Address;

    // public DateTime OrderEntry
    orderItemShipDate?: Date;
    orderItemCompleteDate?: Date;

    itemPricePer: number;
    orderItemLineSum: number;

    // public Representative SalesRep: ; = new Representative(QIQOPersonType.SalesRepresentative);
    // public Representative AccountRep: ; = new Representative(QIQOPersonType.AccountRepresentative);

    orderItemStatus: OrderItemStatus;
    orderItemStatusData: OrderItemStatusData;

    // orderItemProduct: Product;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}

export interface OrderItemStatusData {
    orderItemStatusKey: number;
    orderItemStatusType: string;
    orderItemStatusCode: string;
    orderItemStatusName: string;
    orderItemStatusDesc: string;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}

export interface OrderStatusData {
    orderStatusKey: number;
    orderStatusCode: string;
    orderStatusName: string;
    orderStatusDesc: string;
    orderStatusType: string;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}


