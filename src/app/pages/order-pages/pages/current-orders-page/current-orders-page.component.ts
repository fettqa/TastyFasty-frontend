import {Component, OnInit} from '@angular/core';
import {Order} from '../../../../shared/models/order-model';
import {Restaurant} from '../../../../features/restaurant/models/restaurant-model';
import {User} from '../../../../shared/models/user-model';
import {Breakfast} from '../../../../features/breakfast/models/breakfast-model';
import {Observable, ReplaySubject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {OrdersService} from '../../../../features/orders/service/orders.service';
import {RestaurantService} from '../../../../features/restaurant/services/restaurant.service';
import {BreakfastService} from '../../../../features/breakfast/services/breakfast.service';
import {UserService} from '../../../../shared/services/user.service';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {map} from 'rxjs/operators';
import {Status} from '../../../../features/basket/models/status';


@Component({
  selector: 'app-current-orders-page',
  templateUrl: './current-orders-page.component.html',
  styleUrls: ['./current-orders-page.component.scss']
})
export class CurrentOrdersPageComponent implements OnInit {

  orders?: Order[];

  private refresh$ = new ReplaySubject<void>(1);

  constructor(private route: ActivatedRoute,
              private orderService: OrdersService,
              private restaurantService: RestaurantService,
              private breakfastService: BreakfastService,
              private userService: UserService,
              private currentUserService: CurrentUserService) {
  }

  ngOnInit(): void {
    this.currentUserService.user$.pipe(map(user => {
      if (user.authenticated) {
        this.orderService.getOrdersByDeliveryManId(user.info.id).subscribe(orders => {
          this.orders = orders;
          console.log(orders);
        });
      }
    })).subscribe();

  }

  refresh() {
    this.refresh$.next();
  }


}
