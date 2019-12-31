import { AccountType } from './enums';
import { Address } from './address';
import { EntityAttribute } from './entity';
import { FeeSchedule } from './fee-shedule';
import { Contact } from './contact';

export interface Account {
  accountKey?: number;
  companyKey?: number;
  accountType: AccountType;
  accountCode?: string;
  accountName: string;
  accountDesc?: string;
  accountDBA?: string;
  accountStartDate?: Date;
  accountEndDate?: Date;
  addresses?: Address[];
  accountAttributes?: EntityAttribute[];
  feeSchedules?: FeeSchedule[];
  employees?: any[]; // = new List<AccountPerson>();
  contacts?: Contact[];
  comments?: Comment[];
  addedUserID?: string;
  addedDateTime?: Date;
  updateUserID?: string;
  updateDateTime?: Date;
}
