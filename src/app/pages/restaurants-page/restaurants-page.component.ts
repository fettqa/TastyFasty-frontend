import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ListValue} from './api-model';
import {Restaurant} from './restaurant-model';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.scss']
})
export class RestaurantsPageComponent implements OnInit {

  restaurants?: Restaurant[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<ListValue<Restaurant>>('localhost8080').subscribe(result => {
      this.restaurants = result.items;
    });
  }

}
