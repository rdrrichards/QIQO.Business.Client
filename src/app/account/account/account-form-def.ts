import { FieldDefinition } from '../../shared/dynamic/field-definition';
import { OptionDefinition } from 'src/app/shared/dynamic/option-defninition';
import { Validators } from '@angular/forms';

export class AccountFormDefinition {

  accountTypes: OptionDefinition[] = [{ label: 'Business', value: '2' }, { label: 'Individual', value: '3' }];

  accountFormDefinition: FieldDefinition[] = [
    { key: 'accountKey', type: 'number', isId: true, validators: [ Validators.required ] },
    { key: 'companyKey', type: 'number', isId: true, validators: [ Validators.required ] },
    { key: 'accountType', type: 'select', label: 'Type', validators: [ Validators.required ], options: this.accountTypes },
    { key: 'accountCode', type: 'string', label: 'Code',
      validators: [ Validators.required, Validators.maxLength(10) ],
      fieldWidth: '15%' },
    { key: 'accountName', type: 'string', label: 'Name',
      validators: [ Validators.required, Validators.maxLength(100) ],
      fieldWidth: '50%' },
    { key: 'accountDesc', type: 'string', label: 'Description',
      validators: [ Validators.required, Validators.maxLength(255) ], fieldWidth: '100%' },
    { key: 'accountStartDate', type: 'date', label: 'Start Date', validators: [ Validators.required ] },
    { key: 'accountEndDate', type: 'date', label: 'End Date' },
    { key: 'accountEmail', type: 'email', label: 'Email Address', validators: [ Validators.email ] }
  ];
  accountQuickCreateFormDefinition: FieldDefinition[] = [
    { key: 'accountType', type: 'select', label: 'Type', validators: [ Validators.required ], options: this.accountTypes },
    { key: 'accountName', type: 'string', label: 'Name', validators: [ Validators.required ], fieldWidth: '50%' }
  ];
}
