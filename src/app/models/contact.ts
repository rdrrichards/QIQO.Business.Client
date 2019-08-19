import { ContactType } from './enums';

export interface Contact {
    contactKey: number;
    entityKey: number;
    entityTypeKey: number;
    contactTypeKey: number;
    contactType: ContactType;
    contactValue: string;
    contactDefaultFlg: number;
    contactActiveFlg: number;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}
