import { Component, OnInit } from '@angular/core';
import {Order} from "../../../../shared/models/order-model";
import {OrderService} from "../../../../features/basket/services/order.service";
import {CurrentUserService} from "../../../../core/services/current-user.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-user-orders-page',
  templateUrl: './user-orders-page.component.html',
  styleUrls: ['./user-orders-page.component.scss']
})
export class UserOrdersPageComponent implements OnInit {

  orders?: Order[];

  constructor(private orderService: OrderService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.currentUserService.user$.pipe(map(user => {
      if (user.authenticated) {
        this.orderService.getUserOrders(user.info.id).subscribe(orders => {
          this.orders = orders;
        })
      }
    })).subscribe();
  }

}
