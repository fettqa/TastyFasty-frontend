import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdersPageComponent} from './pages/orders-page/orders-page.component';
import {OrderDetailsComponent} from '../../features/orders/components/order-details/order-details.component';
import {OrderPageGuard} from './guards/order-page.guard';


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
        path: ':orderId',
        component: OrderDetailsComponent,
        /*resolve: {
          order: OrderResolver
        }*/
      },
    ]
  },
  {
    /*TODO*/ /*заменить на путь с айди когда будет работать основаная страница с заказми*/
    path: /*'order/{id}/details',*/ 'order/details',
    component: OrderDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderPagesRoutingModule {
}
