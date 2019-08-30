import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InvoiceEffects } from './invoice.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InvoiceEffects', () => {
  let actions$: Observable<any>;
  let effects: InvoiceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InvoiceEffects,
        provideMockActions(() => actions$)
      ],
      imports: [ HttpClientTestingModule ]
    });

    effects = TestBed.get<InvoiceEffects>(InvoiceEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
