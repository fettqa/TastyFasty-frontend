import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../../../features/restaurant/models/restaurant-model';
import {RestaurantService} from '../../../../features/restaurant/services/restaurant.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss']
})
export class RestaurantPageComponent implements OnInit {

  restaurants?: Restaurant[];

  constructor(private restaurantService: RestaurantService, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    /*  this.restaurantService.getRestaurants().subscribe(restaurantList => {
        this.restaurants = restaurantList.items;
      });*/
    this.httpClient.get<Restaurant[]>('http://localhost:8080/restaurants')
      .subscribe(result => {
        this.restaurants = result;
        console.log(this.restaurants);
        console.log(this.restaurants[0].restaurantInfo.close_time);
        console.log(result[0].restaurantInfo.close_time);
        console.log(result[0].restaurantInfo);

      });

  }

}
