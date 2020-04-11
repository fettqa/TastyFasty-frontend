import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';



@NgModule({
  declarations: [OrdersTableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OrdersTableComponent
  ]
})
export class OrdersModule { }
