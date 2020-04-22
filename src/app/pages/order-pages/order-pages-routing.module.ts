import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdersPageComponent} from './pages/orders-page/orders-page.component';
import {OrderPageGuard} from './guards/order-page.guard';
import {MyOrdersPageComponent} from "./pages/my-orders-page/my-orders-page.component";


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
        path: 'myorders',
        component: MyOrdersPageComponent,
        /*resolve: {
          order: OrderResolver
        }*/
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderPagesRoutingModule {
}
