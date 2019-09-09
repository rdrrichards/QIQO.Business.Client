import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardShellComponent } from './dashboard-shell/dashboard-shell.component';

const routes: Routes = [{ path: '', component: DashboardShellComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
