import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
/*
    canActivate: [DashboardGuard],
*/
    loadChildren: () => import('./pages/home-pages/home-pages.module').then(m => m.HomePagesModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./pages/restaurant-pages/restaurant-pages.module').then(m => m.RestaurantPagesModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./pages/basket-pages/basket-pages.module').then(m => m.BasketPagesModule)
  },
  {
    path: 'account/:userId',
    loadChildren: () => import('./pages/account-pages/account-pages.module').then(m => m.AccountPagesModule)
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
