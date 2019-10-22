import { Order } from 'src/app/models';

export interface OrderState {
  foundOrders?: Order[];
  openOrders?: Order[];
  recentOrders?: Order[];
}
