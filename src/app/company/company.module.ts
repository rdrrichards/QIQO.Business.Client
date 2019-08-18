import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    SharedModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
