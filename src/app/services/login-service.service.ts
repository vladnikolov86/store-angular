import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserRoleEnum } from '../models/UserRole.enum';
import { changeUserRoleEnum } from '../store/root/root.actions';
import { IRootInitialState } from '../store/root/root.reducer';
const STATIC_PASS = 'pass123';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private store: Store<{ rootReducer: IRootInitialState }>) {}

  loginUser(username: UserRoleEnum, password: string) {
    if (password !== STATIC_PASS) {
      return false;
    }
    switch (username) {
      case UserRoleEnum.ADMIN:
      case UserRoleEnum.BUYER:
      case UserRoleEnum.SELLER:
        this.store.dispatch(changeUserRoleEnum({ role: username }));
        //set in store
        return true;
    }
    return false;
  }
}
