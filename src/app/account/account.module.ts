import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account/account.component';
import { SharedModule } from '../shared/shared.module';
import { AccountShellComponent } from './account-shell/account-shell.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './state/account.effects';
import * as fromAccountState from './state/account.reducer';


@NgModule({
  declarations: [AccountComponent, AccountShellComponent, ],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule,
    StoreModule.forFeature('accountState', fromAccountState.reducer),
    EffectsModule.forFeature([AccountEffects]),
  ]
})
export class AccountModule { }
