import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomePagesRoutingModule} from './home-pages-routing.module';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {BreakfastModule} from "../../features/breakfast/breakfast.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePagesRoutingModule,
    BreakfastModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
})
export class HomePagesModule { }
