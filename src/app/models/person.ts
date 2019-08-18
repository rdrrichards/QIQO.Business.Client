import { Address } from './address';
import { EntityAttribute } from './entity';

export interface Person {
    personKey: number;
    personCode: string;
    personFirstName: string;
    personMI: string;
    personLastName: string;
    personFullNameFL: string;
    personFullNameFML: string;
    personFullNameLF: string;
    personFullNameLFM: string;
    personDOB?: Date;
    addresses: Address[];
    personAttributes: EntityAttribute[];
    personTypeData: PersonTypeData;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}

export interface PersonTypeData {
    personTypeKey: number;
    personTypeCategory: string;
    personTypeCode: string;
    personTypeName: string;
    personTypeDesc: string;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}

