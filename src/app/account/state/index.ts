import { Account } from '../../models/account';
import { SearchResult } from 'src/app/models';

export interface AccountState {
  currentAccount: Account;
  recentAccounts?: Account[];
  foundAccounts?: SearchResult[];
  allAccounts?: Account[];
}
