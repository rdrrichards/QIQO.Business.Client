import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OrderShellComponent } from './order-shell.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('OrderShellComponent', () => {
  let component: OrderShellComponent;
  let fixture: ComponentFixture<OrderShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderShellComponent ],
      imports: [ SharedModule, HttpClientTestingModule ]
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
