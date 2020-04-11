import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderPageComponent} from './pages/order-page/order-page.component';
import {OrderStatusPageComponent} from './pages/order-status-page/order-status-page.component';
import {OrderPageGuard} from './guards/order-page.guard';


const routes: Routes = [
  {
    path: 'allOrders',
    canActivate: [OrderPageGuard],
    runGuardsAndResolvers: 'always',
    component: OrderPageComponent
  },
  {
    path: 'orderStatus',
    canActivate: [OrderPageGuard],
    runGuardsAndResolvers: 'always',
    component: OrderStatusPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderPagesRoutingModule {
}
