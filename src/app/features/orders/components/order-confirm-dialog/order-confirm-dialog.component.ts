import {Component, Inject, OnInit} from '@angular/core';
import {Order} from '../../../../shared/models/order-model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderService} from '../../../basket/services/order.service';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {map} from 'rxjs/operators';
import {UserService} from '../../../../shared/services/user.service';
import {User} from '../../../../shared/models/user-model';
import {Status} from '../../../basket/models/status';

@Component({
  selector: 'app-order-confirm-dialog',
  templateUrl: './order-confirm-dialog.component.html',
  styleUrls: ['./order-confirm-dialog.component.scss']
})
export class OrderConfirmDialogComponent implements OnInit {

  private user: User;

  constructor(@Inject(MAT_DIALOG_DATA) private order: Order,
              private orderService: OrderService,
              private currentUserService: CurrentUserService,
              private userService: UserService,
              private dialog: MatDialogRef<OrderConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

  handleFormSubmit() {
    this.currentUserService.user$.pipe(map(user => {
      if (user.authenticated) {
        this.userService.getUserById(user.info.id).subscribe(user1 => {
          this.user = user1;
        });
      }
    })).subscribe();
    // console.log(this.user.username);
    // console.log('Before status: ' + this.order.status);
    this.order.deliverymanID = this.user.id;
    this.order.status = Status.GET_THE_ORDER;
    // console.log('After status: ' + this.order.status);
    this.orderService.updateOrderByOrderId(this.user.id, this.order);
    this.dialog.close();
  }

  close() {

  }
}
