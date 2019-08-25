import { FieldDefinition } from '../../shared/dynamic/field-definition';
import { OptionDefinition } from 'src/app/shared/dynamic/option-defninition';

export class AccountFormDefinition {

  accountTypes: OptionDefinition[] = [{ label: 'Business', value: '2' }, { label: 'Individual', value: '3' }];

  accountFormDefinition: FieldDefinition[] = [
    { key: 'accountKey', type: 'number', isId: true, required: true },
    { key: 'companyKey', type: 'number', isId: true, required: true },
    { key: 'accountType', type: 'select', label: 'Type', required: true, options: this.accountTypes },
    { key: 'accountCode', type: 'string', label: 'Code', required: true },
    { key: 'accountName', type: 'string', label: 'Name', required: true },
    { key: 'accountDesc', type: 'string', label: 'Description', required: true },
    { key: 'accountStartDate', type: 'date', label: 'Start Date', required: true },
    { key: 'accountEndDate', type: 'date', label: 'End Date' }
  ];
}
