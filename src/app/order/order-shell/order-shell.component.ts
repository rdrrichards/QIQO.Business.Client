import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/shared/breadcrumb.service';
import { EntityType, SearchResult, Order } from 'src/app/models';
import { OrderState } from '../state';
import { Store, select } from '@ngrx/store';
import * as orderReducer from '../state/order.reducer';
import * as orderActions from '../state/order.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'qiqo-order-shell',
  templateUrl: './order-shell.component.html',
  styleUrls: ['./order-shell.component.css']
})
export class OrderShellComponent implements OnInit {
  orders$: Observable<Order>;
  EntityType = EntityType;
  searchResults: SearchResult[];
  constructor(private breadcrumbService: BreadcrumbService, private orderStore: Store<OrderState>) {
    this.breadcrumbService.setItems([
      {label: 'Orders'}
    ]);
  }

  ngOnInit() {
    this.orders$ = this.orderStore.pipe(select(orderReducer.selectCurrentOrder));
    this.orderStore.pipe(select(orderReducer.selectFoundOrders)).subscribe(orders => {
      if (orders  && orders.length > 0) {
        this.searchResults = orders;
      }
    });
  }
  onNewResults(event: SearchResult[]) {
    this.orderStore.dispatch(orderActions.findOrdersSuccess({ payload: event.length > 0 ? event : [] }));
  }
}
