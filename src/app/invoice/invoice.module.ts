import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    SharedModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
