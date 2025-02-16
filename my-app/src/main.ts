import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CalcComponent } from './app/calc/calc.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
