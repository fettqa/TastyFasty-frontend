import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Restaurant} from '../../../../features/restaurant/models/restaurant-model';
import {User} from '../../../../shared/models/user-model';
import {Breakfast} from '../../../../features/breakfast/models/breakfast-model';
import {Status} from '../../../../features/basket/models/status';
import {RestaurantService} from '../../../../features/restaurant/services/restaurant.service';
import {BreakfastService} from '../../../../features/breakfast/services/breakfast.service';
import {UserService} from '../../../../shared/services/user.service';
import {OrdersService} from '../../../../features/orders/service/orders.service';
import {Order} from '../../../../shared/models/order-model';
import {map, switchMap} from 'rxjs/operators';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {Observable, ReplaySubject} from 'rxjs';
import {MatHorizontalStepper} from '@angular/material/stepper';


interface CreateForm {
  status?: Status;
}

@Component({
  selector: 'app-order-details',
  templateUrl: './my-orders-page.component.html',
  styleUrls: ['./my-orders-page.component.scss']
})
export class MyOrdersPageComponent implements OnInit, OnChanges {

  order: Order;
  breakfasts: Breakfast[];
  orders$!: Observable<Order[]>;

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
  private refreshOrders$ = new ReplaySubject<void>(1);
  selectedOrder?: Order;


  constructor(private route: ActivatedRoute,
              private ordersService: OrdersService,
              private restaurantService: RestaurantService,
              private breakfastService: BreakfastService,
              private userService: UserService,
              private currentUserService: CurrentUserService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('selectedOrder' in changes) {
      if (changes.selectedOrder.currentValue === undefined) {
        return;
      } else {
        this.ordersService.getOrderById(2).subscribe(
          result => {
            this.order = result;
            for (let i = 0; i < this.allStatuses.length; i++) {
              if (this.order.status === this.allStatuses[i]) {
                this.currentStatus = i;
                console.log(this.currentStatus);
                break;
              }
            }
          });
      }
    }
  }

  ngOnInit(): void {
    this.orders$ = this.refreshOrders$
      .pipe(switchMap(() => this.ordersService.getOrders()), map(list => list));
    this.refreshOrders$.next();
  /*.filter(order => order.deliverymanID == this.deliveryMan.id))*/
    /*this.route.data.subscribe(data => {
      this.order = data.order as Order;
      this.updateFormFromOrder(this.order);
    });*/
  }

  private updateFormFromOrder(order: Order) {

  }


  handleFormSubmit(status: Status) {
    this.order.status = status;
    this.currentStatus++;
    this.refresh();
    console.log(status);
  }

  handleTakeTheOrderClick() {
    this.order.status = Status.TO_RESTAURANT;
    this.currentUserService.user$.pipe(map(user => {
      if (user.authenticated) {
        this.userService.getUserById(user.info.id).subscribe(user1 => {
          console.log(user1);
          this.selectedOrder.deliverymanID = user1.id;
        });
      }
    })).subscribe();
  }

  refresh() {
    this.refresh$.next();
  }

  handleOrderClick($event: Order) {
    this.selectedOrder = $event;
  }

  closeTab() {
    this.selectedOrder = undefined;
  }
}
