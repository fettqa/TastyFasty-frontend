import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdersPageComponent} from './pages/orders-page/orders-page.component';
import {OrderPageGuard} from './guards/order-page.guard';
import {CurrentOrdersPageComponent} from './pages/current-orders-page/current-orders-page.component';


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
        path: 'currentOrders',
        component: CurrentOrdersPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderPagesRoutingModule {
}
