import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderShellComponent } from './order-shell/order-shell.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', component: OrderShellComponent },
  { path: 'new', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
