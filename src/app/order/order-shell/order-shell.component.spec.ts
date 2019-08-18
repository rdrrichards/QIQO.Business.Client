import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderShellComponent } from './order-shell.component';

describe('OrderShellComponent', () => {
  let component: OrderShellComponent;
  let fixture: ComponentFixture<OrderShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderShellComponent ]
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
