import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RestaurantPagesRoutingModule} from './restaurant-pages-routing.module';
import {RestaurantPageComponent} from './pages/restaurant-page/restaurant-page.component';
import {RestaurantModule} from '../../features/restaurant/restaurant.module';
import {BreakfastPageComponent} from './pages/breakfast-page/breakfast-page.component';
import {BreakfastModule} from "../../features/breakfast/breakfast.module";


@NgModule({
  declarations: [RestaurantPageComponent, BreakfastPageComponent],
  imports: [
    CommonModule,
    RestaurantPagesRoutingModule,
    RestaurantModule,
    BreakfastModule
  ]
})
export class RestaurantPagesModule {  }
