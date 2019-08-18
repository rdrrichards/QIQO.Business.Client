import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderShellComponent } from './order-shell/order-shell.component';

const routes: Routes = [{ path: '', component: OrderShellComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
