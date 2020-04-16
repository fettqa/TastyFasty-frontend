import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../../shared/models/order-model';
import {MatDialog} from "@angular/material/dialog";
import {OrderConfirmDialogComponent} from "../order-confirm-dialog/order-confirm-dialog.component";

@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.scss']
})
export class OrderInformationComponent implements OnInit {
  @Input()
  selectedOrder!: Order;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialog = this.dialog.open(OrderConfirmDialogComponent);
  }

  takeOrder(){

  }



  closeTab() {
    this.selectedOrder = undefined;
  }
}
