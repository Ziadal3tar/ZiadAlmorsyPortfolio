import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { openControlGuard } from './open-control.guard';

describe('openControlGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => openControlGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
