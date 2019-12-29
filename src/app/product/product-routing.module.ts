import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: ProductShellComponent },
  { path: 'new', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
