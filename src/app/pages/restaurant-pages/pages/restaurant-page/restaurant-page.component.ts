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

  restaurants?: Restaurant[];
  private refresh$ = new ReplaySubject<void>(1);


  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(restaurantList => {
      this.restaurants = restaurantList;
    });
  }

  handleFirstFormSubmit(value: CreateSearchForm) {
    this.restaurantService.getRestaurantsBySearch(value.search).subscribe(restaurantList => {
      this.restaurants = restaurantList;
    });
    this.refreshPersons();
  }

  refreshPersons() {
    this.refresh$.next();
  }
}
