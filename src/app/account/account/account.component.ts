import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account, AccountType, Address, AddressType, EntityType } from 'src/app/models';
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
  @Output() cancel = new EventEmitter<Account>();
  private formDef: AccountFormDefinition;
  accountFormDef: FieldDefinition[];
  accountOriginal: Account;
  errorMessage: string;
  operation = 'create';

  constructor() { }

  ngOnInit() {
    console.log('AccountComponent account', this.account);
    this.accountOriginal = Object.assign({}, this.account);
    this.formDef = new AccountFormDefinition();
    this.accountFormDef = !this.isQuickCreate ? this.formDef.accountFormDefinition : this.formDef.accountQuickCreateFormDefinition;
    this.account = this.isQuickCreate ? { accountType: AccountType.Individual, accountName: '' } : this.account;
    this.account = !this.account ? { accountKey: 0, companyKey: 1, accountType: AccountType.Individual, accountName: '' } : this.account;
    this.operation = this.isQuickCreate ? 'quick' : this.operation;
    this.account.addresses = !this.account.addresses ? [] : this.account.addresses;
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
  onCancel(event: any) {
    console.log('cancel', event);
    this.cancel.emit();
  }
  newAddress(): Address {
    return { addressKey: 0, addressType: AddressType.Shipping, entityKey: 0, entityType: EntityType.Account, addressLine1: '',
      addressCity: '', addressState: '', addressPostalCode: '', addressDefaultFlag: true, addressActiveFlag: true };
  }
}
