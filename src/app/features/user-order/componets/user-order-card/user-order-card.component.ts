import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../../../shared/models/order-model";

@Component({
  selector: 'app-user-order-card',
  templateUrl: './user-order-card.component.html',
  styleUrls: ['./user-order-card.component.scss']
})
export class UserOrderCardComponent implements OnInit {

  @Input() order: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
