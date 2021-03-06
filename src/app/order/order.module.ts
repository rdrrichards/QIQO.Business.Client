import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import { SharedModule } from '../shared/shared.module';
import { OrderShellComponent } from './order-shell/order-shell.component';
import * as fromOrderState from './state/order.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './state/order.effects';


@NgModule({
  declarations: [OrderComponent, OrderShellComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule,
    StoreModule.forFeature('orderState', fromOrderState.reducer),
    EffectsModule.forFeature([OrderEffects]),
  ]
})
export class OrderModule { }
