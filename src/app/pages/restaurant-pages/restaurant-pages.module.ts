import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantPagesRoutingModule } from './restaurant-pages-routing.module';
import { RestaurantPageComponent } from './pages/restaurant-page/restaurant-page.component';
import {RestaurantModule} from '../../features/restaurant/restaurant.module';
import {BreakfastPageComponent} from "./pages/breakfast-page/breakfast-page.component";
import {RestaurantService} from "../../features/restaurant/services/restaurant.service";
import {BreakfastService} from "../../features/restaurant/services/breakfast.service";


@NgModule({
  declarations: [RestaurantPageComponent, BreakfastPageComponent],
  imports: [
    CommonModule,
    RestaurantPagesRoutingModule,
    RestaurantModule
  ]
})
export class RestaurantPagesModule {
  constructor(private restaurantService: RestaurantService) {
  }
}
