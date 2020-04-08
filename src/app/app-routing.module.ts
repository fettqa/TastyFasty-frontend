import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BreakfastPageComponent} from './pages/restaurant-pages/pages/breakfast-page/breakfast-page.component';
import {RegistrationPageComponent} from './pages/registration/registration-page.component';
import {MyAccountComponent} from './pages/my-account/my-account.component';
import {RestaurantPageComponent} from './pages/restaurant-pages/pages/restaurant-page/restaurant-page.component';
import {BasketPageComponent} from './pages/basket-pages/pages/basket-page/basket-page.component';


const routes: Routes = [
  {
    path: 'restaurant',
    loadChildren: () => import('./pages/restaurant-pages/restaurant-pages.module').then(m => m.RestaurantPagesModule)
  },
  {
    path: 'basket',
    component: BasketPageComponent
  },
  {
    path: 'my-account',
    component: MyAccountComponent
  },
  {
    path: 'registration',
    component: RegistrationPageComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth-pages/auth-pages.module').then(m => m.AuthPagesModule)

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
