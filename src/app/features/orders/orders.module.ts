import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersTableComponent} from './components/orders-table/orders-table.component';
import {StatusPipe} from './pipe/status.pipe';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {OrderInformationComponent} from './components/order-information/order-information.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {OrderConfirmDialogComponent} from './components/order-confirm-dialog/order-confirm-dialog.component';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {OrderDetailsComponent} from './components/order-details/order-details.component';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [OrdersTableComponent, OrderDetailsComponent, StatusPipe, OrderInformationComponent, OrderConfirmDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule
  ],
  exports: [
    OrdersTableComponent,
    StatusPipe,
    OrderInformationComponent,
    OrderDetailsComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class OrdersModule {
}
