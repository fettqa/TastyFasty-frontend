import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { StatusPipe } from './pipe/status.pipe';
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [OrdersTableComponent, StatusPipe],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule
  ],
  exports: [
    OrdersTableComponent,
    StatusPipe
  ]
})
export class OrdersModule { }
