import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountPageComponent} from "./pages/account-page/account-page.component";
import {BasketPageComponent} from "./pages/basket-page/basket-page.component";
import {BasketPageGuard} from "./guards/basket-page.guard";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AccountPageComponent,
      },
      {
        path: 'basket',
        canActivate: [BasketPageGuard],
        runGuardsAndResolvers: 'always',
        component: BasketPageComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountPagesRoutingModule {
}
