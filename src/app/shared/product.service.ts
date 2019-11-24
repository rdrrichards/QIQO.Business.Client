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
  getProducts(): Observable<Product[]> {
    console.log('ProductService.getProducts');
    return this.httpClient.get<Product[]>(environment.productsUrl);
  }
  getProduct(productKey: number): Observable<Product> {
    console.log('ProductService.getProduct', `${environment.productsUrl}?productKey=${productKey}`);
    return this.httpClient.get<Product>(`${environment.productsUrl}?productKey=${productKey}`).pipe(map(product => product[0]));
  }
  findProduct(term: string): Observable<Product[]> {
    console.log('ProductService.findProduct', `${environment.productsUrl}?productName=${term}`);
    return this.httpClient.get<Product[]>(`${environment.productsUrl}?productName=${term}`);
  }
  getRecentProducts(): Observable<Product[]> {
    console.log('ProductService.getProducts');
    return this.httpClient.get<Product[]>(`${environment.productsUrl}/recent`);
  }
}
