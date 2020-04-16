import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { StatusPipe } from './pipe/status.pipe';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import { OrderInformationComponent } from './components/order-information/order-information.component';
import {MatDialogModule} from '@angular/material/dialog';
import { OrderConfirmDialogComponent } from './components/order-confirm-dialog/order-confirm-dialog.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [OrdersTableComponent, StatusPipe, OrderInformationComponent, OrderConfirmDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    OrdersTableComponent,
    StatusPipe,
    OrderInformationComponent
  ]
})
export class OrdersModule { }
