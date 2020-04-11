import {Component, Input, OnInit} from '@angular/core';
import {BasketFillingService} from "../../../../features/basket/services/basket-filling.service";
import {Breakfast} from "../../../../features/breakfast/models/breakfast-model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit {

  basketItems?: Breakfast[];

  itemsToOrder?: Breakfast[];
  numOfPersons?: number = 1;
  fullPrice: number;

  constructor(private basketFillingService: BasketFillingService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const basketId = Number(params.get('basketId'));
        this.basketFillingService.getBasketItems(basketId).subscribe(basketItems => {
          this.basketItems = basketItems;
          this.fullPrice = this.sumPrice(basketItems);
        })
      }
    );
  }

  sumPrice(items: Breakfast[]): number {
    let res: number = 0;
    for (let item of items) {
      res += item.price;
    }
    return res;
  }

}
