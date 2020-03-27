import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { RestaurantsPageComponent } from './pages/restaurants-page/restaurants-page.component';
import { BreakfastPageComponent } from './pages/breakfast-page/breakfast-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BasketPageComponent,
    RestaurantsPageComponent,
    BreakfastPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
