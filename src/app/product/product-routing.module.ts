import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductShellComponent } from './product-shell/product-shell.component';

const routes: Routes = [{ path: '', component: ProductShellComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
