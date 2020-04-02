import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../../../../features/restaurant/models/restaurant-model';
import {RestaurantService} from '../../../../features/restaurant/services/restaurant.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

}
