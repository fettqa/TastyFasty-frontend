import {Component, OnInit} from '@angular/core';
import {BreakfastService} from '../../../../features/restaurant/services/breakfast.service';
import {Breakfast} from '../../../../features/restaurant/models/breakfast-model';

@Component({
  selector: 'app-breakfast-page',
  templateUrl: './breakfast-page.component.html',
  styleUrls: ['./breakfast-page.component.scss'],
  providers: [BreakfastService]
})
export class BreakfastPageComponent implements OnInit {

  breakfasts?: Breakfast[];

  constructor(private breakfastService: BreakfastService) { }

  ngOnInit(): void {
    this.breakfastService.getBreakfasts().subscribe(breakfastList => {
      this.breakfasts = breakfastList;
    });
  }
}
