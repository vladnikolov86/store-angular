import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
} from '@angular/router';
import { Store, State } from '@ngrx/store';
import { RoutingEnum } from '../models/Routing.enum';
import { UserRoleEnum } from '../models/UserRole.enum';
import { IRootInitialState } from '../store/root/root.reducer';

@Injectable()
export default class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(
    private router: Router,
    private state: State<IRootInitialState>
  ) {}
  canActivate(route: ActivatedRouteSnapshot) {
    const roleRequired = route.data['role'] as UserRoleEnum;
    if (this.state.getValue().rootReducer.UserRoleEnum !== roleRequired) {
      this.router.navigateByUrl(RoutingEnum.LOGIN);
      return false;
    }

    return true;
  }
}
