import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account, AccountType } from 'src/app/models';
import { AccountFormDefinition } from './account-form-def';
import { FieldDefinition } from 'src/app/shared/dynamic/field-definition';

@Component({
  selector: 'qiqo-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: Account;
  @Input() isQuickCreate = false;
  @Output() create = new EventEmitter<Account>();
  @Output() update = new EventEmitter<Account>();
  private formDef: AccountFormDefinition;
  accountFormDef: FieldDefinition[];
  accountOriginal: Account;
  errorMessage: string;
  operation: string;

  constructor() { }

  ngOnInit() {
    console.log('AccountComponent account', this.account);
    this.accountOriginal = Object.assign({}, this.account);
    this.formDef = new AccountFormDefinition();
    this.accountFormDef = !this.isQuickCreate ? this.formDef.accountFormDefinition : this.formDef.accountQuickCreateFormDefinition;
    this.account = this.isQuickCreate ? { accountType: AccountType.Individual, accountName: '' } : this.account;
    this.account = !this.account ? { accountKey: 0, companyKey: 1, accountType: AccountType.Individual, accountName: '' } : this.account;
  }
  updateAccount(account: Account) {
    this.update.emit(account);
  }
  createAccount(account: Account) {
    this.create.emit(account);
  }
  formValueChanged(event: any) {
    console.log('AccountComponent formValueChanged', event);
  }
}
