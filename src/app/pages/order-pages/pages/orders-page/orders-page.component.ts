import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../../features/orders/service/orders.service';
import {Order} from '../../../../shared/models/order-model';
import {OrderInfo} from '../../../../shared/models/order-info-model';
@Component({
  selector: 'app-order-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  orders?: Order[];
  orderInfos?: OrderInfo[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe(ordersList => {
      this.orders = ordersList;
      }
    );
    this.ordersService.getOrdersInfo().subscribe(ordersInfo => {
      this.orderInfos = ordersInfo.items;
    });
  }
}
