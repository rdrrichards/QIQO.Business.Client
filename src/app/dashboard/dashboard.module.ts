import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
// import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import * as fromDashboardState from './state/dashboard.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './state/dashboard.effects';
import { DashboardShellComponent } from './dashboard-shell/dashboard-shell.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';


@NgModule({
  declarations: [DashboardShellComponent, DashboardItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboardState', fromDashboardState.reducer),
    EffectsModule.forRoot([DashboardEffects]),
  ]
})
export class DashboardModule { }
