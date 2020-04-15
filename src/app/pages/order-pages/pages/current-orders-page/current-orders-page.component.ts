import { Component, OnInit } from '@angular/core';
import {Order} from '../../../../shared/models/order-model';

@Component({
  selector: 'app-current-orders-page',
  templateUrl: './current-orders-page.component.html',
  styleUrls: ['./current-orders-page.component.scss']
})
export class CurrentOrdersPageComponent implements OnInit {

  order?: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
