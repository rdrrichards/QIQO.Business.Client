import { FieldDefinition } from '../../shared/dynamic/field-definition';
import { OptionDefinition } from 'src/app/shared/dynamic/option-defninition';
import { Validators } from '@angular/forms';

export class AccountFormDefinition {

  accountTypes: OptionDefinition[] = [{ label: 'Business', value: '2' }, { label: 'Individual', value: '3' }];

  accountFormDefinition: FieldDefinition[] = [
    { key: 'accountKey', type: 'number', isId: true, validators: [ Validators.required ] },
    { key: 'companyKey', type: 'number', isId: true, validators: [ Validators.required ] },
    { key: 'accountType', type: 'select', label: 'Type', validators: [ Validators.required ], options: this.accountTypes },
    { key: 'accountCode', type: 'string', label: 'Code', validators: [ Validators.required ] },
    { key: 'accountName', type: 'string', label: 'Name', validators: [ Validators.required ] },
    { key: 'accountDesc', type: 'string', label: 'Description', validators: [ Validators.required ] },
    { key: 'accountStartDate', type: 'date', label: 'Start Date', validators: [ Validators.required ] },
    { key: 'accountEndDate', type: 'date', label: 'End Date' }
  ];
  accountQuickCreateFormDefinition: FieldDefinition[] = [
    { key: 'accountType', type: 'select', label: 'Type', validators: [ Validators.required ], options: this.accountTypes },
    { key: 'accountName', type: 'string', label: 'Name', validators: [ Validators.required ] }
  ];
}
