import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantCardComponent} from './components/restaurant-card/restaurant-card.component';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from "@angular/material/button";
import {RestaurantService} from "./services/restaurant.service";
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [RestaurantCardComponent],
    imports: [
        CommonModule,
        MatCardModule,
        RouterModule,
        MatButtonModule,
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatStepperModule,
        MatDividerModule
    ],
  exports: [RestaurantCardComponent]
})
export class RestaurantModule { }
