import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderPagesRoutingModule } from './order-pages-routing.module';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import {OrdersModule} from "../../features/orders/orders.module";
import { OrderDetailsComponent } from './pages/order-details-page/order-details.component';
import { OrderStatusPageComponent } from './pages/order-status-page/order-status-page.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [OrdersPageComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    OrderPagesRoutingModule,
    OrdersModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,]
})
export class OrderPagesModule { }
