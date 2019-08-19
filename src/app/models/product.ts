import { ProductType } from './enums';
import { EntityAttribute } from './entity';

export interface Product {
    productKey: number;
    productType: ProductType;
    productTypeData: ProductTypeData;
    productCode: string;
    productName: string;
    productDesc: string;
    productNameShort: string;
    productNameLong: string;
    productImagePath: string;
    productAttributes: EntityAttribute[];
    productDescCombo: string;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}

export interface ProductTypeData {
    productTypeKey: number;
    productTypeCategory: string;
    productTypeCode: string;
    productTypeName: string;
    productTypeDesc: string;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}
