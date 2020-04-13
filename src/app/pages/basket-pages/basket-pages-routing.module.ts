import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasketPageComponent} from './pages/basket-page/basket-page.component';
import {BasketPageGuard} from './guards/basket-page.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [BasketPageGuard],
    runGuardsAndResolvers: 'always',
    component: BasketPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketPagesRoutingModule {
}
