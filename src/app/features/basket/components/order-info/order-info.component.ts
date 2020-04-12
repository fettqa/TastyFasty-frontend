import {Component, Input, OnInit} from '@angular/core';
import {Breakfast} from "../../../breakfast/models/breakfast-model";
import {OrderService} from "../../services/order.service";
import {OrderFillingService} from "../../services/order-filling.service";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../../models/order-model";
import {Status} from "../../models/status";
import {BasketItem} from "../../models/basket-item-model";
import {OrderedBreakfast} from "../../models/ordered-breakfast-model";

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {

  @Input() itemsToOrder!: BasketItem[];
  @Input() basketPrice!: number;
  @Input() orderPrice!: number;

  numOfPersons: number = 0;

  constructor(
    private orderService: OrderService,
    private orderFillingService: OrderFillingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  handleMakeOrderButton() {
    this.route.paramMap.subscribe(params => {
      const userId = Number(params.get('userId'));


      const orderToCreate: Order = {
        orderInfo: {
          name: "order",
          price: this.orderPrice
        },
        status: Status.STARTED_MAKING,
        customerID: userId
      };
      this.orderService.createBasket(userId, orderToCreate).subscribe(createdOrder => {
        const orderId = createdOrder.orderID;
        for (let item of this.itemsToOrder) {
          const newOrderItem: OrderedBreakfast = {
            orderID: orderId,
            breakfastID: item.breakfastID
          };
          this.orderFillingService.addToOrder(orderId, newOrderItem).subscribe();
        }
      })


    });
  }

  handleNumOfPersons(num: number) {
    this.numOfPersons = num;
  }

}
