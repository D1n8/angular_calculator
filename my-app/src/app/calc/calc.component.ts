import { KeyValuePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs';

export enum CalcOperations {
  none = '',
  plus = '+',
  minus = '-',
  multiply = '*',
  division = '/'
}

interface ICalcGroup {
  firstNum: number;
  secondNum: number;
  operation: CalcOperations;
}


@Component({
  selector: 'app-calc',
  imports: [FormsModule, NgFor, KeyValuePipe],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})
export class CalcComponent {
  calcOperations = CalcOperations
  calcGroup: ICalcGroup = { firstNum: 0, secondNum: 0, operation: CalcOperations.none }
  result: number = 0

  calculate () {
    switch(this.calcGroup.operation){
      case CalcOperations.plus:
        this.result = this.calcGroup.firstNum + this.calcGroup.secondNum
        break
      case CalcOperations.minus:
        this.result = this.calcGroup.firstNum - this.calcGroup.secondNum
        break
      case CalcOperations.multiply:
        this.result = this.calcGroup.firstNum * this.calcGroup.secondNum
        break
      case CalcOperations.division:
        if (this.calcGroup.secondNum !== 0) {
          this.result = this.calcGroup.firstNum / this.calcGroup.secondNum
        } else alert('Неверное значение')
    }
  }
}
