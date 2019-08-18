import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account/account.component';
import { SharedModule } from '../shared/shared.module';
import { AccountShellComponent } from './account-shell/account-shell.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountSearchComponent } from './account-search/account-search.component';


@NgModule({
  declarations: [AccountComponent, AccountShellComponent, AccountListComponent, AccountSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
