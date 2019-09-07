import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AddressType, EntityType, AccountType } from '../models/enums';
import { Address, Account, User, DashboardItem } from '../models';

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
    const dashboardItems: DashboardItem[] = [
      { title: 'Sales', class: 'sales', primary: '$ 92,440', secondary: '21% more than yesterday', primaryIcon: 'dollar', secondaryIcon: 'chevron-circle-up' },
      { title: 'Views', class: 'views', primary: '7029', secondary: '2% more than yesterday', primaryIcon: 'search', secondaryIcon: 'chevron-circle-up' },
      { title: 'Users', class: 'users', primary: '9522', secondary: '5% more than yesterday', primaryIcon: 'users', secondaryIcon: 'chevron-circle-up' },
      { title: 'Check-Ins', class: 'checkin', primary: '4211', secondary: '18% more than yesterday',
      primaryIcon: 'map-marker', secondaryIcon: 'chevron-circle-up' }
    ];
    return { addresses, accounts, users, dashboardItems };
  }
}
