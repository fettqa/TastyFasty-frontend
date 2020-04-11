import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserPagesRoutingModule} from './user-pages-routing.module';
import {RegistrationPageComponent} from './pages/registration-page/registration-page.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule} from '@angular/forms';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { RolePipe } from './pipes/role.pipe';


@NgModule({
  declarations: [RegistrationPageComponent, RolePipe],
  imports: [
    CommonModule,
    UserPagesRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
  ]
})
export class UserPagesModule {
}
