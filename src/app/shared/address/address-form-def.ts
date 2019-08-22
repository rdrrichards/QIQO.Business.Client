import { FieldDefinition } from '../dynamic/field-definition';
import { OptionDefinition } from '../dynamic/option-defninition';

export class AddressFormDefinition {

  countries: OptionDefinition[] = [];
  addressTypes: OptionDefinition[] = [];
  postalCodes: OptionDefinition[] = [];

  addressFormDefinition: FieldDefinition[] = [
    { key: 'addressKey', type: 'number', isId: true, required: true },
    { key: 'addressType', type: 'select', label: 'Address Types', required: true, options: this.addressTypes },
    { key: 'addressLine1', type: 'string', label: 'Address Line 1', required: true },
    { key: 'addressLine2', type: 'string', label: 'Address Line 2' },
    { key: 'addressLine3', type: 'string', label: 'Address Line 3' },
    { key: 'addressLine4', type: 'string', label: 'Address Line 4' },
    { key: 'addressCity', type: 'string', label: 'City', required: true },
    { key: 'addressState', type: 'select', label: 'State', required: true },
    { key: 'addressCounty', type: 'number', label: 'County' },
    { key: 'addressCountry', type: 'select', label: 'Country', required: true, options: this.countries },
    { key: 'addressPostalCode', type: 'select', label: 'Postal Code', required: true, options: this.postalCodes },
    { key: 'addressNotes', type: 'string', label: 'Notes' },
    { key: 'addressDefaultFlag', type: 'boolean', label: 'Default Address', required: true },
    { key: 'addressActiveFlag', type: 'boolean', label: 'Active', required: true }
  ];

  constructor(countries: OptionDefinition[],
              addressTypes: OptionDefinition[],
              postalCodes: OptionDefinition[]) {
    this.countries = countries;
    this.addressTypes = addressTypes;
    this.postalCodes = postalCodes;
  }
}
