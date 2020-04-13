import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketPagesRoutingModule } from './basket-pages-routing.module';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';


@NgModule({
  declarations: [BasketPageComponent],
  imports: [
    CommonModule,
    BasketPagesRoutingModule
  ]
})
export class BasketPagesModule { }
