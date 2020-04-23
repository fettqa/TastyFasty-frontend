import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Restaurant} from '../../../../features/restaurant/models/restaurant-model';
import {User} from '../../../../shared/models/user-model';
import {Breakfast} from '../../../../features/breakfast/models/breakfast-model';
import {Status} from '../../../basket/models/status';
import {RestaurantService} from '../../../../features/restaurant/services/restaurant.service';
import {BreakfastService} from '../../../../features/breakfast/services/breakfast.service';
import {UserService} from '../../../../shared/services/user.service';
import {OrdersService} from '../../../../features/orders/service/orders.service';
import {Order} from '../../../../shared/models/order-model';
import {map} from 'rxjs/operators';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {ReplaySubject} from 'rxjs';
import {MatHorizontalStepper} from '@angular/material/stepper';


interface CreateForm {
  status?: Status;
}

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  @Input()
  order: Order;
  restaurant: Restaurant;
  customer: User;
  deliveryMan: User;
  breakfasts: Breakfast[];

  Status = Status;
  isClicked = false;
  currentStatus: number;
  allStatuses = [Status.STARTED_MAKING,
    Status.WAITING_FOR_DELIVERYMAN,
    Status.TO_RESTAURANT,
    Status.GET_THE_ORDER,
    Status.ON_THE_WAY_TO_CUSTOMER,
    Status.WAITING_FOR_CUSTOMER,
    Status.READY];

  private refresh$ = new ReplaySubject<void>(1);


  constructor(private route: ActivatedRoute,
              private orderService: OrdersService,
              private restaurantService: RestaurantService,
              private breakfastService: BreakfastService,
              private userService: UserService,
              private currentUserService: CurrentUserService) {
  }

  ngOnInit(): void {
    console.log(this.order);
    this.restaurantService.getRestaurantById(this.order.restaurantID).subscribe(
      restaurant => {
        this.restaurant = restaurant;
      }
    );
    this.userService.getUserById(this.order.customerID).subscribe(user => {
      this.customer = user;
    });

    this.userService.getUserById(this.order.deliverymanID).subscribe(user => {
      this.deliveryMan = user;
    });
    for (let i = 0; i < this.allStatuses.length; i++) {
      if (this.order.status === this.allStatuses[i]) {
        this.currentStatus = i;
        console.log(this.currentStatus);
        break;
      }
    }
  }


  handleFormSubmit(status: Status) {
    this.order.status = status;
    this.currentStatus++;
    this.refresh();
    console.log(status);
    this.orderService.updateOrder(this.order.id.toString(), this.order).subscribe();
  }


  refresh() {
    this.refresh$.next();
  }

  handleCloseOrder() {
    this.order.deliverymanID = -2;
    console.log(this.order);
    this.orderService.updateOrder(this.order.id.toString(), this.order).subscribe();
    this.refresh();
  }
}
