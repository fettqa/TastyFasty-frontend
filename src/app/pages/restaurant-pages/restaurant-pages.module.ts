import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantPagesRoutingModule } from './restaurant-pages-routing.module';
import { RestaurantPageComponent } from './pages/restaurant-page/restaurant-page.component';
import {RestaurantModule} from '../../features/restaurant/restaurant.module';


@NgModule({
  declarations: [RestaurantPageComponent],
  imports: [
    CommonModule,
    RestaurantPagesRoutingModule,
    RestaurantModule
  ]
})
export class RestaurantPagesModule { }
