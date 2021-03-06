/**
 * Created by helldog136 on 22/03/17.
 */


import {AppComponent} from './app.component';

import {NgModule} from '@angular/core';
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
import {ConstraintEditorComponent} from './constraint-editor/constraint_editor.component';
import {ConstraintService} from './constraint-editor/constraint.service';
import {ScheduleService} from './common/schedule.service';


@NgModule({
    declarations: [
        AppComponent,
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
    providers: [ConstraintService,
                ScheduleService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
