import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderShellComponent } from './order-shell.component';
import { OrderSearchComponent } from '../order-search/order-search.component';
import { OrderListComponent } from '../order-list/order-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('OrderShellComponent', () => {
  let component: OrderShellComponent;
  let fixture: ComponentFixture<OrderShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderShellComponent, OrderSearchComponent, OrderListComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
