import { Order, SearchResult } from 'src/app/models';

export interface OrderState {
  currentOrder?: Order;
  foundOrders?: SearchResult[];
  openOrders?: Order[];
  recentOrders?: Order[];
}
