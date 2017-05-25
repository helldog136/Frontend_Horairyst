/**
 * Created by helldog136 on 22/05/17.
 */
import { Injectable } from '@angular/core';
import {Constraint} from './constraint.model';
import {Http} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {API_URL} from '../common/schedule.service';


@Injectable()
export class ConstraintService {
  private constraints: {strong: Array<Constraint>
                        weak: Array<Constraint>};


  constructor(private http: Http) {}

  hasConstraints(): boolean {
    return this.constraints != null;
  }

  setStrongConstraints( neww: Array<Constraint>): void {
    this.constraints.strong = neww;
  }
  setWeakConstraints( neww: Array<Constraint>): void {
    this.constraints.weak = neww;
  }

  clear(): void {
    this.constraints = null;
  }

  getStrongConstraints(): void {
    let that = this;
    this.http.get(API_URL + '/strongconstraints')
      .map(res => res.json())
      .subscribe(
        (data) => {that.constraints.strong = data; },
        (err) => console.log(err)
      );
  }
  getWeakConstraints(): void {
    let that = this;
    this.http.get(API_URL + '/weakconstraints')
      .map(res => res.json())
      .subscribe(
        (data) => {that.constraints.weak = data; },
        (err) => console.log(err)
      );
  }

  getConstraints(): any{
    return this.constraints;
  }


  sendStrongConstraints(): void {
    if (this.hasConstraints()) {
      this.http.post(API_URL + '/strongconstraints', this.constraints.strong);
    }else {
      console.log('no Schedule!!!');
    }
  }

  sendWeakConstraints(): void {//TODO
    if (this.hasConstraints()) {
      this.http.post(API_URL + '/weakconstraints', this.constraints.weak);
    }else {
      console.log('no Schedule!!!');
    }
  }
}
