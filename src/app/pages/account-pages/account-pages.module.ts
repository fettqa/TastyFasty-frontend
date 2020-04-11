import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountPageComponent} from "./pages/account-page/account-page.component";
import {BasketPageComponent} from "./pages/basket-page/basket-page.component";
import {BasketModule} from "../../features/basket/basket.module";
import {AccountModule} from "../../features/account/account.module";
import {AccountPagesRoutingModule} from "./account-pages-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [AccountPageComponent, BasketPageComponent],
  imports: [
    CommonModule,
    AccountPagesRoutingModule,
    MatButtonModule,
    MatIconModule,
    AccountModule,
    BasketModule
  ]
})
export class AccountPagesModule {}
