import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RoutingEnum } from 'src/app/models/Routing.enum';
import { UserRoleEnum } from 'src/app/models/UserRole.enum';
import { NotificationService } from 'src/app/services/notification.service';
import { changeUserRoleEnum } from 'src/app/store/root/root.actions';
import { IRootInitialState } from 'src/app/store/root/root.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  appName: string = 'Main Store';
  role: string = '';
  logoutLabel: string = 'Logout';
  userLoggedOut: string = 'User logged out successfully';
  sucessLabel: string = 'Success';
  role$: Observable<IRootInitialState>;
  constructor(
    private store: Store<{ rootReducer: IRootInitialState }>,
    private router: Router,
    private notifications: NotificationService
  ) {
    this.role$ = store.select('rootReducer');
    this.role$.subscribe((val) => {
      this.role = val.UserRoleEnum;
    });
  }

  ngOnInit(): void {}

  handleLogout() {
    this.store.dispatch(changeUserRoleEnum({ role: UserRoleEnum.NONE }));
    this.router.navigateByUrl(RoutingEnum.LOGIN);
    this.notifications.open(this.userLoggedOut, this.sucessLabel);
  }
}
