import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-choose-quantity',
  templateUrl: './choose-quantity.component.html',
  styleUrls: ['./choose-quantity.component.scss']
})
export class ChooseQuantityComponent implements OnInit, OnChanges {


  @Input() value!: number;
  @Output() onChangeEmitter = new EventEmitter<number>();

  disabled: boolean;

  constructor() { }

  ngOnInit(): void {
    //this.disabled = this.value < 2
  }

  ngOnChanges() {
    this.disabled = this.value < 2
  }

  handlePlus() {
    this.onChangeEmitter.emit(++this.value);
  }

  handleMinus() {
    this.onChangeEmitter.emit(--this.value);
  }

}
