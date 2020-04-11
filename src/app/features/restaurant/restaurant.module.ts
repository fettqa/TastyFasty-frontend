import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantCardComponent} from './components/restaurant-card/restaurant-card.component';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [RestaurantCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [RestaurantCardComponent]
})
export class RestaurantModule { }
