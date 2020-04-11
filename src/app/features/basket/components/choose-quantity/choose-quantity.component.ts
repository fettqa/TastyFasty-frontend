import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-choose-quantity',
  templateUrl: './choose-quantity.component.html',
  styleUrls: ['./choose-quantity.component.scss']
})
export class ChooseQuantityComponent implements OnInit {

  @Input()
  num!: number;

  constructor() { }

  ngOnInit(): void {
  }

  handlePlus() {
    this.num++;
  }

  handleMinus() {
    this.num--;
  }

}
