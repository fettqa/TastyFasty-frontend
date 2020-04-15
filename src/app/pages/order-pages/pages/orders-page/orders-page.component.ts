import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../../../features/orders/service/orders.service";
import {Order} from "../../../../shared/models/order-model";

@Component({
  selector: 'app-order-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {
  orders?: Order[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe(ordersList => {
      this.orders = ordersList.items;
    });
  }

}
