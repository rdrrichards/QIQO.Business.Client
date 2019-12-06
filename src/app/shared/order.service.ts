import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { OrderStatus } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private httpClient: HttpClient) { }
  getOrder(OrderKey: number): Observable<Order> {
    console.log('OrderService.getOrder', `${environment.ordersUrl}?orderKey=${OrderKey}`);
    return this.httpClient.get<Order>(`${environment.ordersUrl}?orderKey=${OrderKey}`).pipe(map(order => order[0]));
  }
  findOrder(term: string): Observable<Order[]> {
    console.log('OrderService.findOrder', `${environment.ordersUrl}?OrderName=${term}`);
    return this.httpClient.get<Order[]>(`${environment.ordersUrl}?OrderName=${term}`);
  }
  getRecentOrders(): Observable<Order[]> {
    console.log('OrderService.getOrders');
    return this.httpClient.get<Order[]>(`${environment.ordersUrl}/recent`);
  }
  saveOrder(order: Order): Observable<Order> {
    console.log('OrderService.getOrders');
    return this.httpClient.post<Order>(`${environment.ordersUrl}`, order);
  }
  cancelOrder(order: Order): Observable<Order[]> {
    console.log('OrderService.getOrders');
    order.orderStatus = OrderStatus.Canceled;
    return this.httpClient.put<Order[]>(`${environment.ordersUrl}`, order);
  }
}
