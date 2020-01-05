import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShellComponent } from './product-shell.component';
import { StoreModule } from '@ngrx/store';
import * as fromProductState from '../state/product.reducer';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

describe('ProductShellComponent', () => {
  let component: ProductShellComponent;
  let fixture: ComponentFixture<ProductShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductShellComponent ],
      imports: [ SharedModule, HttpClientModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('productState', fromProductState.reducer)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
