import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Order} from '../../../../shared/models/order-model';
import {MatDialog} from '@angular/material/dialog';
import {OrderConfirmDialogComponent} from '../order-confirm-dialog/order-confirm-dialog.component';
import {Restaurant} from '../../../restaurant/models/restaurant-model';
import {User} from '../../../../shared/models/user-model';
import {RestaurantService} from '../../../restaurant/services/restaurant.service';
import {UserService} from '../../../../shared/services/user.service';
import {Breakfast} from '../../../breakfast/models/breakfast-model';
import {OrderService} from '../../../basket/services/order.service';
import {Status} from '../../../basket/models/status';
import {ReplaySubject} from 'rxjs';

@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.scss']
})
export class OrderInformationComponent implements OnInit, OnChanges {

  displayedColumns = ['name', 'price', 'tag'];

  @Input() selectedOrder!: Order;
  selectedOrderRestaurant?: Restaurant;
  selectedOrderCustomer?: User;
  selectedOrderBreakfasts?: Breakfast[];

  @Output()
  submitOrder = new EventEmitter();

  @Output()
  closeTabulation = new EventEmitter();
  status = Status;

  private refresh$ = new ReplaySubject<void>(1);


  constructor(private dialog: MatDialog,
              private restaurantService: RestaurantService,
              private userService: UserService,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('selectedOrder' in changes) {
      if (changes.selectedOrder.currentValue === undefined) {
        return;
      } else {
        this.findRestaurantById(this.selectedOrder.restaurantID);
        this.findCustomerById(this.selectedOrder.customerID);
        this.findBreakfastsById(this.selectedOrder.id);
      }
    }
  }

  openDialog() {
    console.log(this.selectedOrder);
    const dialog = this.dialog.open(OrderConfirmDialogComponent, {
      data: {
        order: this.selectedOrder
      }
    });
    dialog.afterClosed().subscribe(() => {
      this.selectedOrder = undefined;
      this.submitOrder.emit();
      this.refresh();
    });
  }

  takeOrder() {
  }

  closeTab() {
    this.selectedOrder = undefined;
    this.closeTabulation.emit();
  }


  findRestaurantById(id: number) {
    this.restaurantService.getRestaurantById(id).subscribe(restaurant => {
      this.selectedOrderRestaurant = restaurant;
    });
  }

  findCustomerById(id: number) {
    this.userService.getUserById(id).subscribe(user => {
      this.selectedOrderCustomer = user;
    });
  }

  findBreakfastsById(id: number) {
    this.orderService.getBreakfastsInOrderById(id).subscribe(breakfasts => {
      this.selectedOrderBreakfasts = breakfasts;
    });
  }

  refresh() {
    this.refresh$.next();
  }

}
