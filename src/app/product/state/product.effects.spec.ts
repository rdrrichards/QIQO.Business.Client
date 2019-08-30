import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductEffects } from './product.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        provideMockActions(() => actions$)
      ],
      imports: [ HttpClientTestingModule ]
    });

    effects = TestBed.get<ProductEffects>(ProductEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
