import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationPageComponent} from './pages/registration-page/registration-page.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPagesRoutingModule { }
