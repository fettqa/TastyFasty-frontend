import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OrdersService} from '../../../../features/orders/service/orders.service';
import {Order} from '../../../../shared/models/order-model';
import {RestaurantService} from '../../../../features/restaurant/services/restaurant.service';
import {UserService} from '../../../../shared/services/user.service';
import {Status} from '../../../../features/basket/models/status';
import {Observable, ReplaySubject} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-order-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})


export class OrdersPageComponent implements OnInit {


  orders?: Order[];
  selectedOrder?: Order;
  orders$!: Observable<Order[]>;
  private refresh$ = new ReplaySubject<void>(1);

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    console.log('orders-page: ' + 'getting orders...');
    this.orders$ = this.refresh$.pipe(
      switchMap(() => this.ordersService.getOrders()),
      map(list => list.filter(order => order.status == Status.WAITING_FOR_DELIVERYMAN))
    );
    this.refreshOrders();
    //this.getOrders();
  }

  handleOrderClick($event: Order) {
    console.log('orders-page: ' + 'order is selected:');
    console.log('orders-page: restaurant id ' + $event.restaurantID);
    console.log('orders-page: customer id' + $event.customerID);
    this.selectedOrder = $event;
  }

  handleSubmitOrder($event: any) {
    this.refreshOrders();
  }

  refreshOrders() {
    this.refresh$.next();
  }

  getOrders(): void {
    this.ordersService.getOrders().subscribe(ordersList => {
        this.orders = ordersList.filter(order => order.status == Status.WAITING_FOR_DELIVERYMAN);
      }
    );
  }
}
