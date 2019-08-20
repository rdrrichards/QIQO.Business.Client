import { TestBed } from '@angular/core/testing';

import { RealtimeResultsService } from './realtime-results.service';

describe('RealtimeResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealtimeResultsService = TestBed.get(RealtimeResultsService);
    expect(service).toBeTruthy();
  });
});
