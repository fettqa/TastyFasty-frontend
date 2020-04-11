import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyAccountComponent} from './pages/my-account/my-account.component';
import {BasketPageComponent} from './pages/basket-pages/pages/basket-page/basket-page.component';
import {DashboardGuard} from './core/guards/dashboard.guard';


const routes: Routes = [
  {
    path: '',
/*
    canActivate: [DashboardGuard],
*/
    loadChildren: () => import('./pages/home-pages/home-pages.module').then(m => m.HomePagesModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./pages/restaurant-pages/restaurant-pages.module').then(m => m.RestaurantPagesModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./pages/basket-pages/basket-pages.module').then(m => m.BasketPagesModule)
  },
  {
    path: 'my-account',
    component: MyAccountComponent
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/user-pages/user-pages.module').then(m => m.UserPagesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth-pages/auth-pages.module').then(m => m.AuthPagesModule)

  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/order-pages/order-pages.module').then(m => m.OrderPagesModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
