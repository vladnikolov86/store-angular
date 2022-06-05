import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RoutingEnum } from './models/Routing.enum';
import { UserRoleEnum } from './models/UserRole.enum';
import { IRootInitialState } from './store/root/root.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task-store';
  rootStore$: Observable<IRootInitialState>;
  constructor(
    private store: Store<{ rootReducer: IRootInitialState }>,
    private router: Router
  ) {
    this.rootStore$ = this.store.select('rootReducer');
  }

  ngOnInit(): void {
    this.rootStore$.subscribe((state) => {
      switch (state.UserRoleEnum) {
        case UserRoleEnum.SELLER: {
          this.router.navigateByUrl(RoutingEnum.SELLER);
        }
      }
    });
  }
}
