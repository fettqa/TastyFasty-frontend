import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {OrderFillingService} from "../../services/order-filling.service";
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
  @Input() userId!: number;
  @Input() numOfPersons: number;

  constructor(
    private orderService: OrderService,
    private orderFillingService: OrderFillingService
  ) {
  }

  ngOnInit(): void {

  }

  handleMakeOrderButton() {

      let ordersByRestaurants: Map<number, BasketItem[]> = this.sortBasketItemsByRests();

      for (let order of ordersByRestaurants.entries()) {

        const orderToCreate: Order = {
          orderInfo: {
            name: "order",
            price: this.orderPrice
          },
          status: Status.STARTED_MAKING,
          restaurantID: order[0],
          customerID: this.userId
        };

        this.orderService.createOrder(this.userId, orderToCreate).subscribe(createdOrder => {
          for (let item of order[1]) {
            for (let i = 0; i < item.numberOfItems; i++) {

              const newOrderItem: OrderedBreakfast = {
                orderID: createdOrder.orderID,
                breakfastID: item.breakfast.id
              };

              this.orderFillingService.addToOrder(createdOrder.orderID, newOrderItem).subscribe();
            }
          }
        })
      }
  }

  sortBasketItemsByRests(): Map<number, BasketItem[]> {
    let res: Map<number, BasketItem[]> = new Map<number, BasketItem[]>();
    for (const item of this.itemsToOrder) {
      if (res.has(item.breakfast.restaurantId)) {
        res.get(item.breakfast.restaurantId).push(item);
      } else {
        res.set(item.breakfast.restaurantId, [item])
      }
    }
    return res;
  }

  handleNumOfPersons(num: number) {
    this.numOfPersons = num;
  }

}
