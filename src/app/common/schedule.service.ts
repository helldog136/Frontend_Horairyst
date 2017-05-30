/**
 * Created by helldog136 on 18/04/17.
 */
import { Injectable } from '@angular/core';
import {LinearSchedule, Schedule, ScheduleMatrix} from './schedule.model';
import {Http} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export const API_URL = 'http://backend.horairyst.deweireld.be';

@Injectable()
export class ScheduleService {
  private schedule: Schedule;

  constructor(private http: Http) {}

  hasSchedule(): boolean {
    return this.schedule != null;
  }

  setSchedule( neww: Schedule): void {
    this.schedule = neww;
}

  clear(): void {
    this.schedule = null;
  }

  getScheduleReceiverCallback() {
    let that = this;
    return (item: any, response: any, status: any, headers: any) => {
      console.log(status + ' : ' + response);
      if (status === 200) {
        console.log(that);
        that.setSchedule(JSON.parse(response));
        console.log(that.schedule);
      }
    };
  }


  checkSchedule(): void {
    if (this.hasSchedule()) {
      let that = this;
      this.http.post(API_URL + '/checkMatrix', this.schedule.matrix)
        .map(res => res.json())
        .subscribe(
          (data) => {that.schedule = data; },
          (err) => console.log(err)
        );
    }else {
      console.log('no Schedule!!!');
    }
  }

  reoptimizeSchedule(): void {
    if (this.hasSchedule()) {
      let that = this;
      this.http.post(API_URL + '/reoptimize', this.schedule.matrix)
        .map(res => res.json())
        .subscribe(
          (data) => {that.schedule = data; },
          (err) => console.log(err)
        );
    }else {
      console.log('no Schedule!!!');
    }
  }

  getSchedule(): Schedule {
    return this.schedule;
  }

  getScheduleValue(): string {
    if (this.schedule.value == null){
      return "Unknown";
    }else {
      return this.schedule.value.toString();
    }
  }

  getMatrix(): ScheduleMatrix {
    return this.schedule.matrix;
  }

  getLatex() {
    return this.schedule.latex;
  }
}
