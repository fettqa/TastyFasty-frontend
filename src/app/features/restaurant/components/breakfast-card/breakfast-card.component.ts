import {Component, Input, OnInit} from '@angular/core';
import {Breakfast} from "../../models/breakfast-model";

@Component({
  selector: 'app-breakfast-card',
  templateUrl: './breakfast-card.component.html',
  styleUrls: ['./breakfast-card.component.scss']
})
export class BreakfastCardComponent implements OnInit {

  @Input()
  breakfast!: Breakfast;

  constructor() { }

  ngOnInit(): void {
  }

}
