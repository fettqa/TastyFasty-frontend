import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantCardComponent} from './components/restaurant-card/restaurant-card.component';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {BreakfastCardComponent} from './components/breakfast-card/breakfast-card.component';
import {MatButtonModule} from "@angular/material/button";
import {RestaurantService} from "./services/restaurant.service";
import {BreakfastService} from "./services/breakfast.service";


@NgModule({
  declarations: [RestaurantCardComponent, BreakfastCardComponent],
  exports: [
    RestaurantCardComponent,
    BreakfastCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule
  ]
})
export class RestaurantModule { }
