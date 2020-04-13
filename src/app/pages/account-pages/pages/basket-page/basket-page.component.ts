import {Component, OnInit} from '@angular/core';
import {BasketFillingService} from "../../../../features/basket/services/basket-filling.service";
import {BasketItem} from "../../../../features/basket/models/basket-item-model";
import {map} from "rxjs/operators";
import {CurrentUserService} from "../../../../core/services/current-user.service";
import {BasketService} from "../../../../features/basket/services/basket.service";

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit {

  basketItems?: BasketItem[];

  basketPrice: number = 0;
  orderPrice: number = 0;
  numOfPersons: number;

  basketId: number;
  userId: number;

  constructor(
    private currentUserService: CurrentUserService,
    private basketService: BasketService,
    private basketFillingService: BasketFillingService
  ) {  }

  ngOnInit(): void {
    this.currentUserService.user$.pipe(map(user => {
        if (user.authenticated) {
          this.userId = user.info.id;
          this.basketService.getBasketByUserId(user.info.id).subscribe(basket => {
            if (basket != undefined) {
              this.basketId = basket.basketID;
              this.numOfPersons = basket.numberOfPersons;
              this.basketFillingService.getBasketItems(this.basketId).subscribe(basketItems => {
                this.basketItems = basketItems;
                this.recalcPrice();
              });
            }
          });
        }
      }
    )).subscribe();
  }

  onRemoveBasketItem(basketItem: BasketItem) {
    this.basketFillingService.removeFromBasket(this.basketId, basketItem.breakfast.id);
    this.basketItems.splice(this.basketItems.findIndex(item => basketItem.basketItemID == item.basketItemID), 1);
    this.recalcPrice();
  }

  onChangeBasketItemState(basketItem: BasketItem) {
    this.basketFillingService.updateBasketItem(this.basketId, basketItem).subscribe(result => {
        this.recalcPrice();
      }
    );
  }

  recalcPrice() {
    this.orderPrice = 0;
    this.basketPrice = 0;
    for (let item of this.basketItems) {
      this.basketPrice += item.breakfast.price * item.numberOfItems;
      if (item.readyToOrder) {
        this.orderPrice += item.breakfast.price * item.numberOfItems;
      }
    }
  }

}
