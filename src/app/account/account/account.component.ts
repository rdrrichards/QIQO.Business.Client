import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from 'src/app/models/account';
import { AccountFormDefinition } from './account-form-def';
import { FieldDefinition } from 'src/app/shared/dynamic/field-definition';

@Component({
  selector: 'qiqo-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: Account;
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
    this.accountFormDef = this.formDef.accountFormDefinition;
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
