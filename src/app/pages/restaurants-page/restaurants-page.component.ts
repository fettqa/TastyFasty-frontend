import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ListValue} from './api-model';
import {Restaurant} from './restaurant-model';
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.scss']
})
export class RestaurantsPageComponent implements OnInit {

  restaurants?: Restaurant[];

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(restaurantList => {
      this.restaurants = restaurantList.items;
    });
  }

}
