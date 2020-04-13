import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RestaurantPagesRoutingModule} from './restaurant-pages-routing.module';
import {RestaurantPageComponent} from './pages/restaurant-page/restaurant-page.component';
import {RestaurantModule} from '../../features/restaurant/restaurant.module';
import {BreakfastPageComponent} from './pages/breakfast-page/breakfast-page.component';
import {BreakfastModule} from '../../features/breakfast/breakfast.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [RestaurantPageComponent, BreakfastPageComponent],
  imports: [
    CommonModule,
    RestaurantPagesRoutingModule,
    RestaurantModule,
    BreakfastModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class RestaurantPagesModule {}
