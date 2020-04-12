import {Component, Input, OnInit} from '@angular/core';
import {BasketFillingService} from "../../../../features/basket/services/basket-filling.service";
import {Breakfast} from "../../../../features/breakfast/models/breakfast-model";
import {ActivatedRoute} from "@angular/router";
import {BasketItem} from "../../../../features/basket/models/basket-item-model";
import {BreakfastService} from "../../../../features/breakfast/services/breakfast.service";

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit {

  basketItems?: BasketItem[];

  basketPrice: number = 0;
  orderPrice: number = 0;

  constructor(
    private breakfastService: BreakfastService,
    private basketFillingService: BasketFillingService,
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const basketId = Number(params.get('basketId'));
      this.basketFillingService.getBasketItems(basketId).subscribe(basketItems => {
        this.basketItems = basketItems;
        this.recalcPrice();
      });
    });
  }

  onRemoveBasketItem(basketItem: BasketItem) {
    this.route.paramMap.subscribe(params => {
      const basketId = Number(params.get('basketId'));
      this.basketFillingService.removeFromBasket(basketId, basketItem.breakfastID);
      this.basketItems.splice(this.basketItems.indexOf(basketItem), 1);
      this.recalcPrice();
    });
  }

  onChangeBasketItemState(basketItem: BasketItem) {
    this.route.paramMap.subscribe(params => {
      const basketId = Number(params.get('basketId'));
      this.basketFillingService.updateBasketItem(basketId, basketItem).subscribe(result => {
          this.basketItems.find(item => item.basketItemID = basketItem.basketItemID).readyToOrder = result.readyToOrder;
          this.basketItems.find(item => item.basketItemID = basketItem.basketItemID).numberOfItems = result.numberOfItems;
          this.recalcPrice();
        }
      );
    });
  }

  recalcPrice() {
    this.orderPrice = 0;
    this.basketPrice = 0;
    for (let item of this.basketItems) {
      this.breakfastService.getBreakfastById(item.breakfastID).subscribe(breakfast => {
        this.basketPrice += breakfast.price * item.numberOfItems;
        if (item.readyToOrder) {
          this.orderPrice += breakfast.price * item.numberOfItems;
        }
      })
    }
  }

}
