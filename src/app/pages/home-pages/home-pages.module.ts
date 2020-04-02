import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePagesRoutingModule } from './home-pages-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [HomePageComponent],
    imports: [
        CommonModule,
        HomePagesRoutingModule,
    ]
})
export class HomePagesModule { }
