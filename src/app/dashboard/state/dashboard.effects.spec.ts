import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DashboardEffects } from './dashboard.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardEffects', () => {
  let actions$: Observable<any>;
  let effects: DashboardEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DashboardEffects,
        provideMockActions(() => actions$)
      ],
      imports: [ HttpClientTestingModule ]
    });

    effects = TestBed.get<DashboardEffects>(DashboardEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
