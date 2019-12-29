import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceShellComponent } from './invoice-shell/invoice-shell.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  { path: '', component: InvoiceShellComponent },
  { path: 'new', component: InvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
