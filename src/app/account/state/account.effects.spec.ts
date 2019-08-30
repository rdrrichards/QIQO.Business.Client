import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AccountEffects } from './account.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AccountEffects', () => {
  let actions$: Observable<any>;
  let effects: AccountEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccountEffects,
        provideMockActions(() => actions$)
      ],
      imports: [ HttpClientTestingModule ]
    });

    effects = TestBed.get<AccountEffects>(AccountEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
