import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountPageComponent} from './pages/account-page/account-page.component';
import {BasketPageComponent} from './pages/basket-page/basket-page.component';
import {BasketModule} from '../../features/basket/basket.module';
import {AccountModule} from '../../features/account/account.module';
import {AccountPagesRoutingModule} from './account-pages-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { EditAccountPageComponent } from '../../features/account/components/edit-account-page/edit-account-page.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from "@angular/material/grid-list";
import { UserOrdersPageComponent } from './pages/user-orders-page/user-orders-page.component';
import {UserOrderModule} from "../../features/user-order/user-order.module";


@NgModule({
  declarations: [AccountPageComponent, BasketPageComponent, EditAccountPageComponent, UserOrdersPageComponent],
  imports: [
    CommonModule,
    AccountPagesRoutingModule,
    MatButtonModule,
    MatIconModule,
    AccountModule,
    BasketModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatGridListModule,
    UserOrderModule
  ]
})
export class AccountPagesModule {}
