import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Order} from '../../../../shared/models/order-model';
import {MatDialog} from '@angular/material/dialog';
import {OrderConfirmDialogComponent} from '../order-confirm-dialog/order-confirm-dialog.component';
import {Restaurant} from '../../../restaurant/models/restaurant-model';
import {User} from '../../../../shared/models/user-model';
import {RestaurantService} from '../../../restaurant/services/restaurant.service';
import {UserService} from '../../../../shared/services/user.service';
import {Address} from "../../../../shared/models/address-model";
import {AddressService} from "../../../address/service/address.service";
import {Breakfast} from "../../../breakfast/models/breakfast-model";
import {OrderService} from "../../../basket/services/order.service";

@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.scss']
})
export class OrderInformationComponent implements OnInit, OnChanges {

  @Input() selectedOrder!: Order;
  selectedOrderRestaurant?: Restaurant;
  selectedOrderCustomer?: User;
  selectedOrderBreakfasts?: Breakfast[];

  @Output()
  submitOrder = new EventEmitter();


  constructor(private dialog: MatDialog,
              private restaurantService: RestaurantService,
              private userService: UserService,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    console.log('order-information init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('order-information: changed to:');
    if ('selectedOrder' in changes) {
      if (changes.selectedOrder.currentValue === undefined) {
        return;
      } else {
        console.log('order-information: selected order restaurantID:' + this.selectedOrder.restaurantID);
        console.log('order-information: selected order customerID:' + this.selectedOrder.customerID);
        this.findRestaurantById(this.selectedOrder.restaurantID);
        this.findCustomerById(this.selectedOrder.customerID);
        this.findBreakfastsById(this.selectedOrder.id);
      }
    }
  }

  openDialog() {
    const dialog = this.dialog.open(OrderConfirmDialogComponent, {
      data: {
        order: this.selectedOrder
      }
    });
    dialog.afterClosed().subscribe(() => {
      this.selectedOrder = undefined;
      this.submitOrder.emit();
    });
  }

  takeOrder() {
  }

  closeTab() {
    this.selectedOrder = undefined;
  }


  findRestaurantById(id: number) {
    console.log('find restaurant...');
    this.restaurantService.getRestaurantById(id).subscribe(restaurant => {
      this.selectedOrderRestaurant = restaurant;
    });
  }

  findCustomerById(id: number) {
    console.log('find user...');
    this.userService.getUserById(id).subscribe(user => {
      this.selectedOrderCustomer = user;
    });
  }
  findBreakfastsById(id: number) {
    console.log('find breakfasts...');
    this.orderService.getBreakfastsInOrderById(id).subscribe(breakfasts => {
      this.selectedOrderBreakfasts = breakfasts;
    });
  }
}
