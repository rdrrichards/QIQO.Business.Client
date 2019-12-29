import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { SharedModule } from '../shared/shared.module';
import { InvoiceShellComponent } from './invoice-shell/invoice-shell.component';
import * as fromInvoiceState from './state/invoice.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InvoiceEffects } from './state/invoice.effects';


@NgModule({
  declarations: [InvoiceComponent, InvoiceShellComponent ],
  imports: [
    CommonModule,
    SharedModule,
    InvoiceRoutingModule,
    StoreModule.forFeature('invoiceState', fromInvoiceState.reducer),
    EffectsModule.forFeature([InvoiceEffects]),
  ]
})
export class InvoiceModule { }
