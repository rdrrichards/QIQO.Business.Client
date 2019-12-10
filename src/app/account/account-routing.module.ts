import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountShellComponent } from './account-shell/account-shell.component';
// import { AccountSearchComponent } from './account-search/account-search.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', component: AccountShellComponent },
  { path: 'new', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
