import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Breakfast} from "../../../breakfast/models/breakfast-model";
import {BasketItem} from "../../models/basket-item-model";

@Component({
  selector: 'app-basket-item-card',
  templateUrl: './basket-item-card.component.html',
  styleUrls: ['./basket-item-card.component.scss']
})
export class BasketItemCardComponent implements OnInit {

  @Input() basketItem!: BasketItem;

  @Output() onChangeBasketItemStateEmitter = new EventEmitter<BasketItem>();
  @Output() onRemoveBasketItemEmitter = new EventEmitter<BasketItem>();

  breakfast: Breakfast;

  constructor() {  }

  ngOnInit(): void {
    this.breakfast = this.basketItem.breakfast;
  }

  handleRemoveFromBasket(): void {
    this.onRemoveBasketItemEmitter.emit(this.basketItem);
  }

  handleBasketItemStateChange(): void {
    this.basketItem.readyToOrder = !this.basketItem.readyToOrder;
    this.onChangeBasketItemStateEmitter.emit(this.basketItem);
  }

  handleNumChange(num: number) {
    this.basketItem.numberOfItems = num;
    this.onChangeBasketItemStateEmitter.emit(this.basketItem);
  }

  toBase64(img: number[]): string {
    return 'data:image/jpeg;base64,' + String(img);
     }

}
