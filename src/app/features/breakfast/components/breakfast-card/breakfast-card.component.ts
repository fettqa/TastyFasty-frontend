import {Component, Input, OnInit} from '@angular/core';
import {Breakfast} from '../../models/breakfast-model';
import {BasketFillingService} from '../../../basket/services/basket-filling.service';
import {BasketService} from '../../../basket/services/basket.service';
import {Basket} from '../../../basket/models/basket-model';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {map} from 'rxjs/operators';
import {BasketItem} from '../../../basket/models/basket-item-model';

@Component({
  selector: 'app-breakfast-card',
  templateUrl: './breakfast-card.component.html',
  styleUrls: ['./breakfast-card.component.scss']
})
export class BreakfastCardComponent implements OnInit {

  @Input()
  breakfast!: Breakfast;

  inBasket: boolean;

  currUserId?: number;
  basketId?: number;

  constructor(
    private basketFillingService: BasketFillingService,
    private basketService: BasketService,
    private currentUserService: CurrentUserService
  ) {
  }

  ngOnInit(): void {
    this.currentUserService.user$.pipe(map(user => {
      if (user.authenticated) {
        this.currUserId = user.info.id;
        this.basketService.getBasketByUserId(this.currUserId).subscribe(basket => {
          if (basket != null) {
            this.basketId = basket.basketID;
            this.basketFillingService.getBreakfastsInBasket(this.basketId).subscribe(breakfasts => {
              if (breakfasts.length > 0) {
                this.inBasket = breakfasts.find(breakfast => this.breakfast.id == breakfast.id) != null;
              }
            });
          }
        });
      }
    })).subscribe();
  }

  handleAddToBasket(): void {
    if (this.currUserId != undefined) {
      if (this.basketId != undefined) {
        const newBasketItem: BasketItem = {
          basketID: this.basketId,
          breakfast: this.breakfast,
          numberOfItems: 1,
          readyToOrder: false
        };
        this.basketFillingService.addToBasket(this.basketId, newBasketItem).subscribe(result => {
          if (result != null) {
            this.inBasket = true;
          }
        });
      } else {
        const newBasket: Basket = {
          userID: this.currUserId,
          fullPrice: 0.0,
          numberOfPersons: 1
        };
        this.basketService.createBasket(this.currUserId, newBasket).subscribe(createdBasket => {
          const newBasketItem: BasketItem = {
            basketID: createdBasket.basketID,
            breakfast: this.breakfast,
            numberOfItems: 1,
            readyToOrder: false
          };
          this.basketFillingService.addToBasket(createdBasket.basketID, newBasketItem).subscribe(result => {
            if (result != null) {
              this.inBasket = true;
            }
          });
        });
      }
    } else {
      console.log('unauth');
    }
  }

  handleRemoveFromBasket(): void {
    if (this.currUserId) {
      this.basketService.getBasketByUserId(this.currUserId).subscribe(basket => {
        this.basketFillingService.removeFromBasket(basket.basketID, this.breakfast.id);
        this.inBasket = false;
      });
    }
  }

  toBase64(img: number[]): string {
    return 'data:image/jpeg;base64,' + String(img);
  }
}
