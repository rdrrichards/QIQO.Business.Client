import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CompanyEffects } from './company.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CompanyEffects', () => {
  let actions$: Observable<any>;
  let effects: CompanyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CompanyEffects,
        provideMockActions(() => actions$)
      ],
      imports: [ HttpClientTestingModule ]
    });

    effects = TestBed.get<CompanyEffects>(CompanyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
