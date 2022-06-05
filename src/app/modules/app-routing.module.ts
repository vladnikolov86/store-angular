import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../components/login/login.component';
import { SellerComponent } from '../components/seller/seller.component';
import { UserRoleEnum } from '../models/UserRole.enum';
import OnlyLoggedInUsersGuard from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
    canActivate: [OnlyLoggedInUsersGuard],
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'seller',
    pathMatch: 'full',
    component: SellerComponent,
    canActivate: [OnlyLoggedInUsersGuard],
    data: { role: UserRoleEnum.SELLER },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
