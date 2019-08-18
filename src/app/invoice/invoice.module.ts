import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { SharedModule } from '../shared/shared.module';
import { InvoiceShellComponent } from './invoice-shell/invoice-shell.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceSearchComponent } from './invoice-search/invoice-search.component';


@NgModule({
  declarations: [InvoiceComponent, InvoiceShellComponent, InvoiceListComponent, InvoiceSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
