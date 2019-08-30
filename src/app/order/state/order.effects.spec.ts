import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { OrderEffects } from './order.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OrderEffects', () => {
  let actions$: Observable<any>;
  let effects: OrderEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrderEffects,
        provideMockActions(() => actions$)
      ],
      imports: [ HttpClientTestingModule ]
    });

    effects = TestBed.get<OrderEffects>(OrderEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
