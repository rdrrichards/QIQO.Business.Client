import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AddressType, EntityType, AccountType, OrderStatus } from '../models/enums';
import { Address, Account, User, DashboardItem, Order } from '../models';

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
      { title: 'Sales', class: 'sales', primary: '92,440', secondary: '21% more than yesterday',
        primaryIcon: 'dollar', secondaryIcon: 'chevron-circle-up', type: 'overview' },
      { title: 'Views', class: 'views', primary: '7029', secondary: '2% more than yesterday',
        primaryIcon: 'search', secondaryIcon: 'chevron-circle-up', type: 'overview' },
      { title: 'Users', class: 'users', primary: '9522', secondary: '5% more than yesterday',
        primaryIcon: 'users', secondaryIcon: 'chevron-circle-up', type: 'overview' },
      { title: 'Check-Ins', class: 'checkin', primary: '4211', secondary: '18% more than yesterday',
      primaryIcon: 'map-marker', secondaryIcon: 'chevron-circle-up', type: 'overview' },
      { title: 'Open Orders', type: 'table',
        cols: [
          { field: 'id', header: 'ID' },
          { field: 'date', header: 'Create Date' },
          { field: 'name', header: 'Account' },
          { field: 'total', header: 'Total' }
        ],
        data: [
          { id: 'ORD0000111', date: '2019-09-01', name: 'Same Old Account', total: '$ 60.00' },
          { id: 'ORD0000112', date: '2019-07-01', name: 'New Account', total: '$ 60.00' },
          { id: 'ORD0000113', date: '2019-08-01', name: 'JD', total: '$ 60.00' },
          { id: 'ORD0000114', date: '2019-04-01', name: 'Sports', total: '$ 60.00' }
        ]
      },
      { title: 'Open Invoices', type: 'table',
        cols: [
          { field: 'id', header: 'ID' },
          { field: 'date', header: 'Create Date' },
          { field: 'name', header: 'Account' },
          { field: 'total', header: 'Total' }
        ],
        data: [
          { id: 'INV0000111', date: '2019-09-01', name: 'Same Old Account', total: '$ 60.00' },
          { id: 'INV0000112', date: '2019-07-01', name: 'New Account', total: '$ 60.00' },
          { id: 'INV0000113', date: '2019-08-01', name: 'JD', total: '$ 60.00' },
          { id: 'INV0000114', date: '2019-04-01', name: 'Sports', total: '$ 60.00' }
        ]
      }
    ];
    const orders: Order[] = [
      // { id: 'ORD0000111', date: '2019-09-01', name: 'Same Old Account', total: '$ 60.00' },
      // { id: 'ORD0000112', date: '2019-07-01', name: 'New Account', total: '$ 60.00' },
      // { id: 'ORD0000113', date: '2019-08-01', name: 'JD', total: '$ 60.00' },
      // { id: 'ORD0000114', date: '2019-04-01', name: 'Sports', total: '$ 60.00' },
      { orderKey: 1,
        fromEntityKey: 1,
        accountKey: 1,
        account: accounts[0],
        ccountContactKey: 1,
        orderNumber: 'ORD0000111',
        orderAccountContact: null,
        orderItemCount: 1,
        orderValueSum: 1,
        orderEntryDate: new Date('2019-09-01'),
        orderStatusDate: new Date('2019-09-01'),
        orderShipDate: null,
        orderCompleteDate: null,
        orderStatus: OrderStatus.Open,
        orderStatusData: null,
        orderItems: [],
        comments: [],
        addedUserID: null,
        addedDateTime: null,
        updateUserID: null,
        updateDateTime: null
      },
      { orderKey: 1,
        fromEntityKey: 1,
        accountKey: 1,
        account: accounts[0],
        ccountContactKey: 1,
        orderNumber: 'ORD0000112',
        orderAccountContact: null,
        orderItemCount: 1,
        orderValueSum: 1,
        orderEntryDate: new Date('2019-09-01'),
        orderStatusDate: new Date('2019-09-01'),
        orderShipDate: null,
        orderCompleteDate: null,
        orderStatus: OrderStatus.Open,
        orderStatusData: null,
        orderItems: [],
        comments: [],
        addedUserID: null,
        addedDateTime: null,
        updateUserID: null,
        updateDateTime: null
      },
      { orderKey: 1,
        fromEntityKey: 1,
        accountKey: 1,
        account: accounts[0],
        ccountContactKey: 1,
        orderNumber: 'ORD0000113',
        orderAccountContact: null,
        orderItemCount: 1,
        orderValueSum: 1,
        orderEntryDate: new Date('2019-09-01'),
        orderStatusDate: new Date('2019-09-01'),
        orderShipDate: null,
        orderCompleteDate: null,
        orderStatus: OrderStatus.Open,
        orderStatusData: null,
        orderItems: [],
        comments: [],
        addedUserID: null,
        addedDateTime: null,
        updateUserID: null,
        updateDateTime: null
      },
      { orderKey: 1,
        fromEntityKey: 1,
        accountKey: 1,
        account: accounts[0],
        ccountContactKey: 1,
        orderNumber: 'ORD0000114',
        orderAccountContact: null,
        orderItemCount: 1,
        orderValueSum: 1,
        orderEntryDate: new Date('2019-09-01'),
        orderStatusDate: new Date('2019-09-01'),
        orderShipDate: null,
        orderCompleteDate: null,
        orderStatus: OrderStatus.Open,
        orderStatusData: null,
        orderItems: [],
        comments: [],
        addedUserID: null,
        addedDateTime: null,
        updateUserID: null,
        updateDateTime: null
      }
    ];
    return { addresses, accounts, users, dashboardItems, orders };
  }
}
