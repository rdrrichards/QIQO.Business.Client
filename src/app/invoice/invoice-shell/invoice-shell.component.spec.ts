import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { InvoiceShellComponent } from './invoice-shell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromInvoiceState from '../state/invoice.reducer';

describe('InvoiceShellComponent', () => {
  let component: InvoiceShellComponent;
  let fixture: ComponentFixture<InvoiceShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceShellComponent ],
      imports: [ SharedModule, HttpClientTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('invoiceState', fromInvoiceState.reducer)
      ]
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
