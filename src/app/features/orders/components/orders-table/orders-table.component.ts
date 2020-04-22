import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../../../../shared/models/order-model';


@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {
  columns = [ 'name', 'status' , 'tag'];

  @Input()
  orders!: Order[];

  @Output()
  orderClick = new EventEmitter<Order>();

  selectedOrder?: Order;
  search: string;

  constructor() { }

  ngOnInit(): void {

  }

  handleOrderClick() {
    console.log('orders-table: handle order click emit in table component');
    this.orderClick.emit(this.selectedOrder);
  }
}
