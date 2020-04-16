import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Restaurant} from '../../../restaurant/models/restaurant-model';
import {User} from '../../../../shared/models/user-model';
import {Breakfast} from '../../../breakfast/models/breakfast-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Status} from '../../../basket/models/status';
import {Role} from '../../../../core/models/current-user.model';
import {RestaurantService} from '../../../restaurant/services/restaurant.service';
import {BreakfastService} from '../../../breakfast/services/breakfast.service';
import {UserService} from '../../../../shared/services/user.service';
import {OrdersService} from '../../service/orders.service';
import {Order} from '../../../../shared/models/order-model';


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
