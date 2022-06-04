import { TestBed } from '@angular/core/testing';
import OnlyLoggedInUsersGuard from './auth-guard.service';


describe('AuthGuardService', () => {
  let service: OnlyLoggedInUsersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlyLoggedInUsersGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
