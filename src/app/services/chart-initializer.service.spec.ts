import { TestBed } from '@angular/core/testing';

import { ChartInitializerService } from './chart-initializer.service';

describe('ChartInitializerService', () => {
  let service: ChartInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
