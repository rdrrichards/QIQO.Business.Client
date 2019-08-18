import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountShellComponent } from './account-shell/account-shell.component';

const routes: Routes = [{ path: '', component: AccountShellComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
