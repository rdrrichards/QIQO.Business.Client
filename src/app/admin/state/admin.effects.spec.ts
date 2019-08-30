import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AdminEffects } from './admin.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminEffects', () => {
  let actions$: Observable<any>;
  let effects: AdminEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminEffects,
        provideMockActions(() => actions$)
      ],
      imports: [ HttpClientTestingModule ]
    });

    effects = TestBed.get<AdminEffects>(AdminEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
