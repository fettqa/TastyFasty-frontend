import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountInfoComponent} from './components/account-info/account-info.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [AccountInfoComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [AccountInfoComponent]
})
export class AccountModule { }
