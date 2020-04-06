import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../../../../features/restaurant/models/restaurant-model';
import {RestaurantService} from "../../../../features/restaurant/services/restaurant.service";

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss'],
  providers: [RestaurantService]
})
export class RestaurantPageComponent implements OnInit {

  restaurants?: Restaurant[];

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(restaurantList => {
      this.restaurants = restaurantList;
    });
  }

}
