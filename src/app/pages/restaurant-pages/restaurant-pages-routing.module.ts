import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RestaurantPageComponent} from './pages/restaurant-page/restaurant-page.component';
import {BreakfastPageComponent} from '../breakfast-page/breakfast-page.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: RestaurantPageComponent,
      },
      {
        path: ':breakfasts',
        component: BreakfastPageComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantPagesRoutingModule {
}
