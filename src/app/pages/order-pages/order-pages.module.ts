import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderPagesRoutingModule } from './order-pages-routing.module';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import {OrdersModule} from "../../features/orders/orders.module";
import { OrderDetailsComponent } from './pages/order-details-page/order-details.component';


@NgModule({
  declarations: [OrdersPageComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    OrderPagesRoutingModule,
    OrdersModule
  ]
})
export class OrderPagesModule { }
