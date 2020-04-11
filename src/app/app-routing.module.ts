import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationPageComponent} from './pages/registration/registration-page.component';
import {AccountPageComponent} from './pages/account-pages/pages/account-page/account-page.component';


const routes: Routes = [
  {
    path: 'restaurants',
    loadChildren: () => import('./pages/restaurant-pages/restaurant-pages.module').then(m => m.RestaurantPagesModule)
  },
  {
    path: 'account/:userId',
    loadChildren: () => import('./pages/account-pages/account-pages.module').then(m => m.AccountPagesModule)
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
