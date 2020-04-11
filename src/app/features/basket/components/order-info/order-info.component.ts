import {Component, Input, OnInit} from '@angular/core';
import {Breakfast} from "../../../breakfast/models/breakfast-model";
import {OrderService} from "../../services/order.service";
import {OrderFillingService} from "../../services/order-filling.service";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../../models/order-model";
import {Status} from "../../models/status";

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {

  @Input()
  itemsToOrder: Breakfast[];

  @Input()
  numOfPersons!: number;

  @Input()
  fullPrice!: number;

  constructor(private orderService: OrderService, private orderFillingService: OrderFillingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  handleMakeOrderButton() {
    this.route.paramMap.subscribe(params => {
      const userId = Number(params.get('userId'));
      const orderToCreate: Order = {
        orderInfo: {
          name: "order",
          price: this.fullPrice
        },
        status: Status.STARTED_MAKING,
        customerID: userId
      };
      this.orderService.createBasket(userId, orderToCreate).subscribe(createdOrder => {
        const orderId = createdOrder.orderID;
        for (let item of this.itemsToOrder) {
          this.orderFillingService.addToOrder(orderId, item).subscribe();
        }
      })
    });
  }

}
