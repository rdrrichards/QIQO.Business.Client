import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account/account.component';
import { SharedModule } from '../shared/shared.module';
import { AccountShellComponent } from './account-shell/account-shell.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountSearchComponent } from './account-search/account-search.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './state/account.effects';
import * as fromAccountState from './state/account.reducer';


@NgModule({
  declarations: [AccountComponent, AccountShellComponent, AccountListComponent, AccountSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule,
    StoreModule.forFeature('accountState', fromAccountState.reducer),
    EffectsModule.forRoot([AccountEffects]),
  ]
})
export class AccountModule { }
