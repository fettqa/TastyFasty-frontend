import {Component,EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {

  }

  handleOrderClick() {
    this.orderClick.emit(this.selectedOrder);
  }
}
