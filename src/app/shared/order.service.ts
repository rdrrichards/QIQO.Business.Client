import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private httpClient: HttpClient) { }
  getOrder(userName: string): Observable<Order> {
    return this.httpClient.get<Order>(`${environment.usersUrl}?name=${userName}`).pipe(map(users => users[0]));
  }
}
