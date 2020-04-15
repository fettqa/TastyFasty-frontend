import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Order} from '../../../../features/orders/models/order-model';
import {Restaurant} from '../../../../features/restaurant/models/restaurant-model';
import {User} from '../../../../shared/models/user-model';
import {Breakfast} from '../../../../features/breakfast/models/breakfast-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Status} from '../../../../features/basket/models/status';
import {Role} from '../../../../core/models/current-user.model';
import {RestaurantService} from '../../../../features/restaurant/services/restaurant.service';
import {BreakfastService} from '../../../../features/breakfast/services/breakfast.service';
import {UserService} from '../../../../shared/services/user.service';
import {OrdersService} from '../../../../features/orders/service/orders.service';


interface CreateForm {
  status?: Status;
}

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

   order?: Order;
   restaurant?: Restaurant;
   customer?: User;
   deliveryMan: User;
   breakfasts: Breakfast[];

  Status = Status;
  isClicked = false;

  constructor(private route: ActivatedRoute,
              private orderService: OrdersService,
              private restaurantService: RestaurantService,
              private breakfastService: BreakfastService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.orderService.getOrderById(2).subscribe(
      result => {
        this.order = result;
        this.restaurantService.getRestaurantById(this.order.restaurantID).subscribe(
          restaurant => {
            this.restaurant = restaurant;
            console.log(this.restaurant);
          }
        );
        this.userService.getUserById(this.order.customerID).subscribe(user => {
          this.customer = user;
          console.log(this.customer);
        });

        this.userService.getUserById(this.order.deliverymanID).subscribe(user => {
          this.deliveryMan = user;
          console.log(this.deliveryMan);
        });
      }
    );


    /*this.route.data.subscribe(data => {
      this.order = data.order as Order;
      this.updateFormFromOrder(this.order);
    });*/
  }

  private updateFormFromOrder(order: Order) {

  }


  handleHoleFormSubmit() {
    /*TODO закрытие заказа*/
  }

  handleClickChange() {
    this.isClicked = !this.isClicked;
  }

  handleFormSubmit(status: Status) {
    this.order.status = status;
    console.log(status);
  }
}
