import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcComponent } from './calc/calc.component';

@Component({
  selector: 'app-root',
  imports: [CalcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
