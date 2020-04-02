import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasketPageComponent} from './pages/basket-page/basket-page.component';
import {BreakfastPageComponent} from './pages/breakfast-page/breakfast-page.component';
import {RegistrationPageComponent} from './pages/registration/registration-page.component';
import {MyAccountComponent} from './pages/my-account/my-account.component';
import {RestaurantPageComponent} from './pages/restaurant-pages/pages/restaurant-page/restaurant-page.component';


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
