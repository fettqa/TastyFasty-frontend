import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdersPageComponent} from "./pages/orders-page/orders-page.component";
import {OrderDetailsComponent} from "./pages/order-details-page/order-details.component";
import {OrderResolver} from "./resolvers/order.resolver";


const routes: Routes = [
  {
    path: '',
    canActivate: [OrderPageGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: OrdersPageComponent,
      },
      {
        path: ':id',
        component: OrderDetailsComponent,
        /*resolve: {
          order: OrderResolver
        }*/
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderPagesRoutingModule {
}
