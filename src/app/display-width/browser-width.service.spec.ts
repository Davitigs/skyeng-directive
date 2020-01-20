import { TestBed } from '@angular/core/testing';

import { BrowserWidthService } from './browser-width.service';

describe('BrowserWidthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrowserWidthService = TestBed.get(BrowserWidthService);
    expect(service).toBeTruthy();
  });
});
