import { NgModule } from '@angular/core';

//Modules
import { MaterialModule } from './modules/material-module';

import { AppRoutingModule } from './modules/app-routing.module';
import { CommonModule } from './modules/common-module';

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
import { AdminComponent } from './components/admin/admin.component';
import { CanvasWrapComponent } from './components/shared/canvas-wrap/canvas-wrap.component';
import { ChartInitializerService } from './services/chart-initializer.service';
import { ProductItemComponent } from './components/shared/product-item/product-item.component';
import { FetchProductsService } from './services/fetch-products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SellerComponent,
    AdminComponent,
    CanvasWrapComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.forRoot({ rootReducer }),
  ],
  providers: [
    OnlyLoggedInUsersGuard,
    LoginService,
    NotificationService,
    ChartInitializerService,
    FetchProductsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
