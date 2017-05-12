/**
 * Created by helldog136 on 22/03/17.
 */


import {AppComponent} from './app.component';

import {NgModule} from '@angular/core';
import {ScheduleCheckerComponent} from './schedule_checker/schedule_checker.component';
import {ScheduleComputeComponent} from './submit/schedule_compute.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {FileSelectDirective, FileDropDirective} from 'ng2-file-upload';

import {SlotDetailComponent} from './common/slot-details/slot.detail.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ScheduleMatrixComponent} from './common/schedule-matrix/schedule.matrix.component';
import {HttpModule} from '@angular/http';
import {Ng2DragDropModule} from 'ng2-drag-drop';

import { ModalModule } from 'ng2-modal';


@NgModule({
    declarations: [
        AppComponent,
        ScheduleCheckerComponent,
        ScheduleComputeComponent,
        HomeComponent,
        SlotDetailComponent,
        ScheduleMatrixComponent,

        FileSelectDirective,
        FileDropDirective
    ],
    imports: [
      RouterModule.forRoot([
        {path: 'home',        component: HomeComponent },
        {path: 'compute',     component: ScheduleComputeComponent },
        {path: 'checker',     component: ScheduleCheckerComponent },
        {path: '*',           component: HomeComponent }
      ]),
      ModalModule,
      BrowserModule,
      FormsModule,
      HttpModule,
      Ng2DragDropModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
