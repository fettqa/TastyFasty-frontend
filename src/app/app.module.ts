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
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {RestaurantModule} from './features/restaurant/restaurant.module';
import {CoreModule} from './core/core.module';
import {PermissionsModule} from './features/permissions/permissions.module';
import {OrdersModule} from "./features/orders/orders.module";
import {LOGGING_INTERCEPTOR} from "./core/interceptors/logging.interceptor";
import {HomePagesModule} from "./pages/home-pages/home-pages.module";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatRadioModule,
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
    MatStepperModule,
    ReactiveFormsModule,
    MatIconModule,
    RestaurantModule,
    PermissionsModule,
    RestaurantModule,
    OrdersModule,
    HomePagesModule,
    MatTableModule
  ],
  providers: [
    LOGGING_INTERCEPTOR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
