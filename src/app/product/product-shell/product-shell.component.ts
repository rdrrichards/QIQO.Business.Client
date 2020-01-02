import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/shared/breadcrumb.service';
import { EntityType, SearchResult, Product } from 'src/app/models';
import { Store, select } from '@ngrx/store';
import { ProductState } from '../state';
import * as productReducer from '../state/product.reducer';
import * as productActions from '../state/product.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'qiqo-product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.css']
})
export class ProductShellComponent implements OnInit {
  account$: Observable<Product>;
  EntityType = EntityType;
  searchResults: SearchResult[];

  constructor(private breadcrumbService: BreadcrumbService, private productStore: Store<ProductState>) {
    this.breadcrumbService.setItems([
      {label: 'Products'}
    ]);
  }

  ngOnInit() {
    this.account$ = this.productStore.pipe(select(productReducer.selectCurrentProduct));
    this.productStore.pipe(select(productReducer.selectFoundProducts)).subscribe(products => {
      if (products  && products.length > 0) {
        this.searchResults = products;
      }
    });
  }
  onNewResults(event: SearchResult[]) {
    this.productStore.dispatch(productActions.findProductSuccess({ payload: event.length > 0 ? event : [] }));
  }

}
