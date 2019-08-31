import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }
  getProduct(userName: string): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.usersUrl}?name=${userName}`).pipe(map(users => users[0]));
  }
}
