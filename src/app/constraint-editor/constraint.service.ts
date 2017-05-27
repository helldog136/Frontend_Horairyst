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
  public constraints: any;


  constructor(private http: Http) {
    this.constraints = {strong: [],
                        weak: []};
    this.getStrongConstraints();
    this.getWeakConstraints();
  }

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
    this.constraints.strong.splice(0, this.constraints.strong.length);
    this.constraints.weak.splice(0, this.constraints.weak.length);
  }

  getStrongConstraints(): void {
    let that = this;
    fetch(API_URL + '/strongconstraints').then((response) => {
      return response.json();
    }).then(
      (data) => {that.constraints.strong = data; }
    ).catch((ex) => {
      console.error('Error fetching strongconstraints', ex);
    });
    // this.http.get(API_URL + '/strongconstraints')
    //   .map(res => res.json())
    //   .subscribe(
    //     (data) => {that.constraints.strong = data; },
    //     (err) => console.log(err)
    //   );
  }
  getWeakConstraints(): void {
    let that = this;
    fetch(API_URL + '/weakconstraints').then((response) => {
      return response.json();
    }).then(
      (data) => {that.constraints.weak = data; }
    ).catch((ex) => {
      console.error('Error fetching weakconstraints', ex);
    });

    // this.http.get(API_URL + '/weakconstraints')
    //   .map(res => res.json())
    //   .subscribe(
    //     (data) => {that.constraints.weak = data; },
    //     (err) => console.log(err)
    //   );
  }

  getConstraints(): any {
    return this.constraints;
  }


  sendStrongConstraints(): void {
    if (this.hasConstraints()) {
      this.http.post(API_URL + '/strongconstraints', this.constraints.strong)
        .map(res => res.json())
        .subscribe(
          (data) => {},
          (err) => console.log(err)
        );
    }else {
      console.log('no Schedule!!!');
    }
  }

  sendWeakConstraints(): void {// TODO
    if (this.hasConstraints()) {
      this.http.post(API_URL + '/weakconstraints', this.constraints.weak)
        .map(res => res.json())
        .subscribe(
          (data) => {},
          (err) => console.log(err)
        );
    }else {
      console.log('no Schedule!!!');
    }
  }
}
