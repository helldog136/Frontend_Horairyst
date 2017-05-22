import {Component} from '@angular/core';
import {ScheduleService} from './common/schedule.service.js';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css').toString() ] ,
  providers: [ScheduleService],
})
export class AppComponent {}
