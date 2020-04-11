import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasketItemCardComponent} from './components/basket-item-card/basket-item-card.component';
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {OrderInfoComponent} from './components/order-info/order-info.component';
import {AppModule} from "../../app.module";
import {ChooseQuantityComponent} from "./components/choose-quantity/choose-quantity.component";


@NgModule({
  declarations: [BasketItemCardComponent, OrderInfoComponent, ChooseQuantityComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [BasketItemCardComponent, OrderInfoComponent]
})
export class BasketModule { }
