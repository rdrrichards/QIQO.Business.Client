import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { SharedModule } from '../shared/shared.module';
import * as fromCompanyState from './state/company.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './state/company.effects';


@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    SharedModule,
    CompanyRoutingModule,
    StoreModule.forFeature('companyState', fromCompanyState.reducer),
    EffectsModule.forFeature([CompanyEffects]),
  ]
})
export class CompanyModule { }
