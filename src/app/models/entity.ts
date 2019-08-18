import { AttributeType, AttributeDataType, EntityType } from './enums';

export interface EntityAttribute {
    attributeKey: string;
    entityKey: string;
    entityType: EntityType;
    entityTypeData: EntityTypeData;
    attributeType: AttributeType;
    attributeTypeData: AttributeTypeData;
    attributeValue: string;
    attributeDataTypeKey: number;
    attributeDataType: AttributeDataType;
    attributeDisplayFormat: string;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}

export interface EntityTypeData {
  entityTypeKey: number;
  entityTypeCode: string;
  entityTypeName: string;
  entityTypeDesc: string;
  addedUserID: string;
  addedDateTime: Date;
  updateUserID: string;
  updateDateTime: Date;
}

export interface AttributeTypeData {
  attributeTypeKey: number;
  attributeTypeCode: string;
  attributeTypeName: string;
  attributeTypeDesc: string;
  attributeDataType: AttributeDataType;
  attributeDefaultFormat: string;
  addedUserID: string;
  addedDateTime: Date;
  updateUserID: string;
  updateDateTime: Date;
}
