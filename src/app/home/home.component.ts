import {Component, OnInit} from '@angular/core';
import {ScheduleService} from '../common/schedule.service';

@Component({
  selector: 'home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  title: string = 'Horairyst Home Page';
  sampleFile: string = '';

  constructor(private scheduleService: ScheduleService) {
    this.sampleFile = this.scheduleService.getSampleInputFile();
  }

}
