import {Component, OnInit} from '@angular/core';
import {API_URL, ScheduleService} from '../common/schedule.service';

@Component({
  selector: 'home',
  template: require('./home.component.html')
})
export class HomeComponent {
  title: string = 'Horairyst Home Page';
  sampleFile: string = '';

  constructor(private scheduleService: ScheduleService) {
    let that = this;
    fetch(API_URL + '/sampleinput').then((response) => {
      return response.text();
    }).then(
      (data) => {that.sampleFile = data; }
    ).catch((ex) => {
      console.error('Error fetching sample input', ex);
    });
  }

}
