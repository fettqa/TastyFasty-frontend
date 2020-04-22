import {Component, Inject, OnInit} from '@angular/core';
import {Order} from '../../../../shared/models/order-model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderService} from '../../../basket/services/order.service';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {map} from 'rxjs/operators';
import {UserService} from '../../../../shared/services/user.service';
import {Status} from '../../../basket/models/status';
import {OrdersService} from "../../service/orders.service";
import {LoggedUser} from "../../../../core/models/current-user.model";

@Component({
  selector: 'app-order-confirm-dialog',
  templateUrl: './order-confirm-dialog.component.html',
  styleUrls: ['./order-confirm-dialog.component.scss']
})
export class OrderConfirmDialogComponent implements OnInit {

  private user: LoggedUser;


  constructor(@Inject(MAT_DIALOG_DATA) private order: Order,
              private orderService: OrderService,
              private ordersService: OrdersService,
              private currentUserService: CurrentUserService,
              private userService: UserService,
              private dialog: MatDialogRef<OrderConfirmDialogComponent>) { }

  ngOnInit(): void {
    this.currentUserService.user$.pipe(map(user => {
      if (user.authenticated) {
          this.user = user;
        }
      })).subscribe();
    console.log('confirm-dialog: current username is ' + this.user.info.username);
    console.log('confirm-dialog: init end');
  }

  handleFormSubmit() {
    console.log('order-confirm-dialog: before deliveryId is ' + this.order.deliverymanID);
    this.order.deliverymanID = this.user.info.id;
    console.log('order-confirm-dialog: after deliveryId is ' + this.order.deliverymanID);
    console.log('confirm-dialog: Before status: ' + this.order.status);
    this.order.status = Status.GET_THE_ORDER;
    console.log('confirm-dialog: After status: ' + this.order.status);
    this.orderService.updateOrderByOrderId(this.order.id, this.order);
    this.dialog.close();

  }

  close() {

  }
}
