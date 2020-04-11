import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreakfastCardComponent} from "./components/breakfast-card/breakfast-card.component";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {BreakfastService} from "./services/breakfast.service";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [BreakfastCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [BreakfastCardComponent]
})
export class BreakfastModule { }
