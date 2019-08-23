import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private httpClient: HttpClient) { }
  getAddresses(): Observable<Address[]> {
    console.log('AddressService.getAddresses');
    return this.httpClient.get<Address[]>(environment.addressesUrl);
  }
}
