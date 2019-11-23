import { Account } from '../../models/account';

export interface AccountState {
  currentAccount: Account;
  recentAccounts?: Account[];
  foundAccounts?: Account[];
  allAccounts?: Account[];
}
