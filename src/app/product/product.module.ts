import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import * as fromProductState from './state/product.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/product.effects';


@NgModule({
  declarations: [ProductComponent, ProductShellComponent, ProductListComponent, ProductSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    StoreModule.forFeature('productState', fromProductState.reducer),
    EffectsModule.forRoot([ProductEffects]),
  ]
})
export class ProductModule { }
