import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceShellComponent } from './invoice-shell.component';

describe('InvoiceShellComponent', () => {
  let component: InvoiceShellComponent;
  let fixture: ComponentFixture<InvoiceShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
