import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AddressType, EntityType, AccountType } from '../models/enums';
import { Address } from '../models/address';
import { Account } from '../models/account';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const addresses: Address[] = [
      {
        addressKey: 1,
        addressType: AddressType.Billing,
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
    const accounts: Account[] = [
      {
        accountKey: 1,
        companyKey: 1,
        accountType: AccountType.Individual,
        accountCode: '00001',
        accountName: 'R. Richards',
        accountDesc: 'R. Richards',
        accountStartDate: new Date('2018-08-22'),
        accountEndDate: new Date('2028-08-22'),
        addresses: [ ...addresses ],
        accountAttributes: [],
        addedUserID: 'RR',
        addedDateTime: new Date('2018-08-22')
      }
    ];
    const users: User[] = [{ name: 'Richard Richards', roles: [] }];
    return { addresses, accounts, users };
  }
}
