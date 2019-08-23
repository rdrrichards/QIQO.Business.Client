import { Component, OnInit, Input } from '@angular/core';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'qiqo-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() addresses: Address[];
  constructor() { }

  ngOnInit() {
    console.log('addresses', this.addresses);
  }

}
