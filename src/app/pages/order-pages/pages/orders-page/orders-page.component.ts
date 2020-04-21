import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../../features/orders/service/orders.service';
import {Order} from '../../../../shared/models/order-model';
import {RestaurantService} from '../../../../features/restaurant/services/restaurant.service';
import {UserService} from '../../../../shared/services/user.service';
import {Restaurant} from '../../../../features/restaurant/models/restaurant-model';
import {User} from '../../../../shared/models/user-model';
@Component({
  selector: 'app-order-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  orders?: Order[];
  selectedOrder?: Order;

  constructor(private ordersService: OrdersService,
              private restaurantService: RestaurantService,
              private userService: UserService) { }

  ngOnInit(): void {
    // console.log('getting orders...');
    this.getOrders();
  }

  handleOrderClick($event: Order) {
    // console.log('order is selected:');
    // console.log($event.restaurantID);
    // console.log($event.customerID);
    this.selectedOrder = $event;
  }

  getOrders(): void {
    this.ordersService.getOrders().subscribe(ordersList => {
        this.orders = ordersList;
      }
    );
  }
}
