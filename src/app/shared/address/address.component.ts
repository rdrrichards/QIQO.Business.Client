import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from 'src/app/models/address';
import { OptionDefinition } from '../dynamic/option-defninition';
import { AddressFormDefinition } from './address-form-def';
import { FieldDefinition } from '../dynamic/field-definition';

@Component({
  selector: 'qiqo-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() address: Address;
  @Input() countries: OptionDefinition[] = [];
  @Input() addressTypes: OptionDefinition[] = [];
  @Input() postalCodes: OptionDefinition[] = [];
  @Output() create = new EventEmitter<Address>();
  @Output() update = new EventEmitter<Address>();

  private formDef: AddressFormDefinition;
  addressFormDef: FieldDefinition[];
  addressOriginal: Address;
  errorMessage: string;
  operation: string;

  constructor() { }

  ngOnInit() {
    this.addressOriginal = Object.assign({}, this.address);
    this.formDef = new AddressFormDefinition(this.countries, this.addressTypes, this.postalCodes);
    this.addressFormDef = this.formDef.addressFormDefinition;
    // this.addressTypes =
  }
  updateAddress(address: Address) {
    this.update.emit(address);
  }
  createAddress(address: Address) {
    this.create.emit(address);
  }
  formValueChanged(event: any) {
    console.log('AddressComponent formValueChanged', event);
  }
}
