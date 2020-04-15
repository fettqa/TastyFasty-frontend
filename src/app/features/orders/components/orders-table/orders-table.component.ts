import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../../../shared/models/order-model";


@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {
  columns: string[] = [ 'name', 'status' , 'tag'];

  @Input()
  orders!: Order[];

  constructor() { }

  ngOnInit(): void {
  }

}
