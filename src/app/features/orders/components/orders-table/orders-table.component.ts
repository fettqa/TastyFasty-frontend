import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Order} from '../../../../shared/models/order-model';
import {Restaurant} from '../../../restaurant/models/restaurant-model';
import {Observable} from 'rxjs';
import {RestaurantService} from '../../../restaurant/services/restaurant.service';
import {element} from "protractor";


@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {

  constructor(public restaurantService: RestaurantService) { }
  columns = [ 'name', 'status' , 'tag'];
  restaurants: Restaurant[];

  @Input()
  orders!: Order[];

  @Output()
  orderClick = new EventEmitter<Order>();

  selectedOrder?: Order;
  search: string;

  orderID: number;

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }


  handleOrderClick() {
    console.log('orders-table: handle order click emit in table component');
    this.orderClick.emit(this.selectedOrder);
  }
}
