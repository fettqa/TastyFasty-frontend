import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../models/restaurant-model';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {

  @Input()
  restaurant!: Restaurant;

  starsNumber = [];

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < this.restaurant.restaurantInfo.rating; i++) {
      this.starsNumber.push(1);
    }
  }

  toBase64(img: number[]): string {
    return 'data:image/jpeg;base64,' + String(img);
  }
}
