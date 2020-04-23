import {Component, OnInit} from '@angular/core';
import {Breakfast} from "../../../../features/breakfast/models/breakfast-model";
import {HomePageService} from "../../services/home-page.service";
import {ReplaySubject} from "rxjs";

interface Sort {
  id: string;
  value: string;
  icon: string;
  compFunc: (a: Breakfast, b: Breakfast) => any;
}

interface CreateSearchForm {
  search?: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  cols: number;

  breakfasts?: Breakfast[];

  sorts: Sort[];
  private refresh$ = new ReplaySubject<void>(1);

  constructor(private homePageService: HomePageService) {
  }

  ngOnInit(): void {
    this.homePageService.getBreakfasts().subscribe(breakfasts => {
      this.breakfasts = breakfasts;
      this.sorts = [
        {id: '1', value: 'ascending price', icon: 'trending_up', compFunc: (a, b) => a.price > b.price ? 1 : -1},
        {id: '2', value: 'descending price', icon: 'trending_down', compFunc: (a, b) => a.price < b.price ? 1 : -1}
      ];
    });
    this.onResize();
  }

  onResize() {
    this.cols = window.innerWidth / 400;
  }

  handleSortForm(value: Sort) {
    this.breakfasts.sort(value.compFunc);
    this.refreshBreakfasts();
  }

  handleSearchForm(value: CreateSearchForm) {
    this.homePageService.getBreakfastsBySearch(value.search).subscribe(breakfasts => {
      this.breakfasts = breakfasts;
    });
    this.refreshBreakfasts();
  }

  refreshBreakfasts() {
    this.refresh$.next();
  }

}
