import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {SignInDialogComponent} from './components/sign-in-dialog/sign-in-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrationPageComponent} from './pages/registration/registration-page.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MyAccountComponent} from './pages/my-account/my-account.component';
import {MatIconModule} from '@angular/material/icon';
import {RestaurantModule} from './features/restaurant/restaurant.module';
import {CoreModule} from './core/core.module';
import {BasketPageComponent} from './pages/basket-pages/pages/basket-page/basket-page.component';
import {LOGGING_INTERCEPTOR} from "./core/interceptors/logging.interceptor";
import {HomePageComponent} from "./pages/home-pages/pages/home-page/home-page.component";
import {OrdersModule} from "./features/orders/orders.module";
import {HomePagesModule} from "./pages/home-pages/home-pages.module";

@NgModule({
  declarations: [
    AppComponent,
    BasketPageComponent,
    SignInDialogComponent,
    RegistrationPageComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatIconModule,
    RestaurantModule,
    OrdersModule,
    HomePagesModule
  ],
  providers: [
    LOGGING_INTERCEPTOR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
