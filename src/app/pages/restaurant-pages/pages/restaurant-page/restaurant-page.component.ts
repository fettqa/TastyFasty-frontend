import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../../../../features/restaurant/models/restaurant-model';
import {RestaurantService} from '../../../../features/restaurant/services/restaurant.service';
import {ReplaySubject} from 'rxjs';


interface CreateSearchForm {
  search?: string;
}

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss']
})
export class RestaurantPageComponent implements OnInit {

  cols: number;

  restaurants?: Restaurant[];
  private refresh$ = new ReplaySubject<void>(1);


  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(restaurantList => {
      this.restaurants = restaurantList;
    });
    this.onResize();
  }

  handleSearchForm(value: CreateSearchForm) {
    this.restaurantService.getRestaurantsBySearch(value.search).subscribe(restaurantList => {
      this.restaurants = restaurantList;
    });
    this.refreshRestaurants();
  }

  refreshRestaurants() {
    this.refresh$.next();
  }

  onResize() {
    this.cols = window.innerWidth / 400;
  }
}
