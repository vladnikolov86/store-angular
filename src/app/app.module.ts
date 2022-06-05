import { NgModule } from '@angular/core';

//Modules
import { AppRoutingModule } from './modules/app-routing.module';
import { CommonModule } from './modules/common-module';
import { MaterialModule } from './modules/material-module';
import { StoreModule } from '@ngrx/store';

//Services
import OnlyLoggedInUsersGuard from './services/auth-guard.service';
import { LoginService } from './services/login-service.service';
import { NotificationService } from './services/notification.service';

//Reducers
import { rootReducer } from './store/root/root.reducer';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SellerComponent } from './components/seller/seller.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SellerComponent,
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    CommonModule,
    StoreModule.forRoot({ rootReducer }),
  ],
  providers: [OnlyLoggedInUsersGuard, LoginService, NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
