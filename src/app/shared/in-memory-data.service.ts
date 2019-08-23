import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AddressType, EntityType } from '../models/enums';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const addresses: Address[] = [
      { addressKey: 1,
        addressType: AddressType.Mailing,
        entityKey: 1,
        entityType: EntityType.Account,
        addressLine1: '555 Main',
        addressCity: 'Nashville',
        addressState: 'TN',
        addressCounty: '',
        addressCountry: 'USA',
        addressPostalCode: '37211',
        addressNotes: 'Test notes',
        addressDefaultFlag: true,
        addressActiveFlag: true,
        addedUserID: 'RR',
        addedDateTime: new Date('2018-08-22') },
    ];
    return { addresses };
  }
}
