import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RoutingEnum } from '../models/Routing.enum';

@Injectable()
export default class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    this.router.navigateByUrl(RoutingEnum.LOGIN);
    return false;
  }
}
