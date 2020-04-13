import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Order} from "../../../../shared/models/order-model";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  private order?: Order;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  /*  this.route.data.subscribe(data => {
      this.order = data.order as Order;
      this.updateFormFromOrder(this.order)
    })*/
  }

 /* private updateFormFromOrder(order: Order) {

  }*/
}
