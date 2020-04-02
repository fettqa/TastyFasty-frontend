import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RestaurantCardComponent} from './components/restaurant-card/restaurant-card.component';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [RestaurantCardComponent],
  exports: [
    RestaurantCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ]
})
export class RestaurantModule { }
