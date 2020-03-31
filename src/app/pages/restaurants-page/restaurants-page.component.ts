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
        /*console.log(result.items);
        this.restaurants = result.items;
      */
      });

  }


}
