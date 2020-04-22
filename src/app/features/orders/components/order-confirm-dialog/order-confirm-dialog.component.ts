import {Component, Inject, OnInit} from '@angular/core';
import {Order} from '../../../../shared/models/order-model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderService} from '../../../basket/services/order.service';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {map} from 'rxjs/operators';
import {UserService} from '../../../../shared/services/user.service';
import {Status} from '../../../basket/models/status';
import {OrdersService} from '../../service/orders.service';
import {LoggedUser} from '../../../../core/models/current-user.model';

@Component({
  selector: 'app-order-confirm-dialog',
  templateUrl: './order-confirm-dialog.component.html',
  styleUrls: ['./order-confirm-dialog.component.scss']
})
export class OrderConfirmDialogComponent implements OnInit {

  private user: LoggedUser;
  private order: Order;


  constructor(@Inject(MAT_DIALOG_DATA) public data,
              private orderService: OrderService,
              private ordersService: OrdersService,
              private currentUserService: CurrentUserService,
              private userService: UserService,
              private dialog: MatDialogRef<OrderConfirmDialogComponent>) {
  }

  ngOnInit(): void {
    console.log(this.data.order);
    this.order = this.data.order;
    this.currentUserService.user$.pipe(map(user => {
      if (user.authenticated) {
        this.user = user;
      }
    })).subscribe();
  }

  handleFormSubmit() {
    this.order.deliverymanID = this.user.info.id;
    this.order.status = Status.TO_RESTAURANT;
    this.orderService.updateOrderByOrderId(this.order.id, this.order).subscribe();
    this.dialog.close();
  }

  close() {

  }
}
