import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOrderCardComponent } from './componets/user-order-card/user-order-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [UserOrderCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [UserOrderCardComponent]
})
export class UserOrderModule { }
