import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../models/order-model";

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {

  @Input()
  order!: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
