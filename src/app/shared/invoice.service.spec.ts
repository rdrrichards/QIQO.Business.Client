import { TestBed } from '@angular/core/testing';

import { InvoiceService } from './invoice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InvoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: InvoiceService = TestBed.get(InvoiceService);
    expect(service).toBeTruthy();
  });
});
