import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderPagesRoutingModule } from './order-pages-routing.module';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import {OrdersModule} from '../../features/orders/orders.module';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { CurrentOrdersPageComponent } from './pages/current-orders-page/current-orders-page.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [OrdersPageComponent, CurrentOrdersPageComponent],
  exports: [
  ],
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
    MatFormFieldModule,
    MatTreeModule,
    MatExpansionModule
  ]
})
export class OrderPagesModule { }
