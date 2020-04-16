import {Component, OnInit} from '@angular/core';
import {BreakfastService} from "../../../../features/breakfast/services/breakfast.service";
import {Breakfast} from "../../../../features/breakfast/models/breakfast-model";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-breakfast-page',
  templateUrl: './breakfast-page.component.html',
  styleUrls: ['./breakfast-page.component.scss']
})
export class BreakfastPageComponent implements OnInit {

  cols: number;

  breakfasts?: Breakfast[];

  constructor(private breakfastService: BreakfastService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.breakfastService.getBreakfasts(Number(params.get('restaurantId'))).subscribe(breakfastList => {
        this.breakfasts = breakfastList;
      })
    });
    this.onResize();
  }

  onResize() {
    this.cols = window.innerWidth / 400;
  }
}
