import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../models/order-model";
import {Observable} from "rxjs";
import {Restaurant} from "../../../restaurant/models/restaurant-model";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {
  columns: [ 'name', 'status' , 'tag'];

  @Input()
  order!: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
