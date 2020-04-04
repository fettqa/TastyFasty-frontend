import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderPagesRoutingModule } from './order-pages-routing.module';
import { OrderPageComponent } from './pages/order-page/order-page.component';


@NgModule({
  declarations: [OrderPageComponent],
  imports: [
    CommonModule,
    OrderPagesRoutingModule
  ]
})
export class OrderPagesModule { }
