import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-choose-quantity',
  templateUrl: './choose-quantity.component.html',
  styleUrls: ['./choose-quantity.component.scss']
})
export class ChooseQuantityComponent implements OnInit {

  @Input() num!: number;
  @Output() onChangeEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handlePlus() {
    this.onChangeEmitter.emit(++this.num);
  }

  handleMinus() {
    this.onChangeEmitter.emit(--this.num);
  }

}
