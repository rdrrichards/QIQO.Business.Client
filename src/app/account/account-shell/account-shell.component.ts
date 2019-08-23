import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/shared/address.service';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'qiqo-account-shell',
  templateUrl: './account-shell.component.html',
  styleUrls: ['./account-shell.component.css']
})
export class AccountShellComponent implements OnInit {
  addresses$: Observable<Address[]>;
  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.addresses$ = this.addressService.getAddresses();
  }

}
