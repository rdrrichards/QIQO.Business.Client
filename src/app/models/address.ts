import { AddressType, EntityType } from './enums';

export interface Address {
  addressKey: number;
  addressType: AddressType;
  addressTypeData: AddressTypeData;
  entityKey: number;
  entityType: EntityType;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  addressCity: string;
  addressState: string;
  addressCounty: string;
  addressCountry: string;
  addressPostalCode: string;
  addressNotes: string;
  addressDefaultFlag: boolean;
  addressActiveFlag: boolean;
  addedUserID: string;
  addedDateTime: Date;
  updateUserID: string;
  updateDateTime: Date;
}

export interface AddressTypeData {
  addressTypeKey: number;
  addressTypeCode: string;
  addressTypeName: string;
  addressTypeDesc: string;
  addedUserID: string;
  addedDateTime: Date;
  updateUserID: string;
  updateDateTime: Date;
}

export interface AddressPostal {
    countryName: string;
    postalCode: string;
    stateCode: string;
    stateFullName: string;
    cityName: string;
    countyName: string;
    timeZone: number;
}
