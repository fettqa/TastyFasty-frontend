import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasketPageComponent} from './pages/basket-page/basket-page.component';
import {RestaurantsPageComponent} from './pages/restaurants-page/restaurants-page.component';
import {BreakfastPageComponent} from './pages/breakfast-page/breakfast-page.component';


const routes: Routes = [
  {
    path: 'basket',
    component: BasketPageComponent
  },
  {
    path: 'restaurants',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: RestaurantsPageComponent,
      },
      {
        path: ':breakfasts',
        component: BreakfastPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
