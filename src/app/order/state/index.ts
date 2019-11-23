import { Order } from 'src/app/models';

export interface OrderState {
  currentOrder?: Order;
  foundOrders?: Order[];
  openOrders?: Order[];
  recentOrders?: Order[];
}
