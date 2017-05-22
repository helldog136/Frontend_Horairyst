/**
 * Created by helldog136 on 22/03/17.
 */


import {AppComponent} from './app.component.js';

import {NgModule} from '@angular/core';
import {ScheduleCheckerComponent} from './schedule_checker/schedule_checker.component.js';
import {ScheduleComputeComponent} from './submit/schedule_compute.component.js';
import {HomeComponent} from './home/home.component.js';
import {RouterModule} from '@angular/router';
import {FileSelectDirective, FileDropDirective} from 'ng2-file-upload';

import {SlotDetailComponent} from './common/slot-details/slot.detail.component.js';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ScheduleMatrixComponent} from './common/schedule-matrix/schedule.matrix.component.js';
import {HttpModule} from '@angular/http';
import {Ng2DragDropModule} from 'ng2-drag-drop';

import { ModalModule } from 'ng2-modal';
import {ConstraintEditorComponent} from './constraint-editor/constraint_editor.component.js';


@NgModule({
    declarations: [
        AppComponent,
        ScheduleCheckerComponent,
        ScheduleComputeComponent,
        ConstraintEditorComponent,
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
        {path: 'settings',     component: ConstraintEditorComponent },
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
