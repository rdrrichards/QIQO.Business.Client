import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { StoreModule } from '@ngrx/store';
import * as fromAdminState from './state/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './state/admin.effects';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature('adminState', fromAdminState.reducer),
    EffectsModule.forRoot([AdminEffects]),
  ]
})
export class AdminModule { }
