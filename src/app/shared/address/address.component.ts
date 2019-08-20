import { Component, OnInit, Input } from '@angular/core';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'qiqo-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() address: Address;
  addressOriginal: Address;

  constructor() { }

  ngOnInit() {
    this.addressOriginal = Object.assign({}, this.address);
  }

}
