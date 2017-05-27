/**
 * Created by helldog136 on 22/03/17.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = require("./app.component");
var core_1 = require("@angular/core");
var schedule_checker_component_1 = require("./schedule_checker/schedule_checker.component");
var schedule_compute_component_1 = require("./submit/schedule_compute.component");
var home_component_1 = require("./home/home.component");
var router_1 = require("@angular/router");
var ng2_file_upload_1 = require("ng2-file-upload");
var slot_detail_component_1 = require("./common/slot-details/slot.detail.component");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var schedule_matrix_component_1 = require("./common/schedule-matrix/schedule.matrix.component");
var http_1 = require("@angular/http");
var ng2_drag_drop_1 = require("ng2-drag-drop");
var ng2_modal_1 = require("ng2-modal");
var constraint_editor_component_1 = require("./constraint-editor/constraint_editor.component");
var constraint_service_1 = require("./constraint-editor/constraint.service");
var schedule_service_1 = require("./common/schedule.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            schedule_checker_component_1.ScheduleCheckerComponent,
            schedule_compute_component_1.ScheduleComputeComponent,
            constraint_editor_component_1.ConstraintEditorComponent,
            home_component_1.HomeComponent,
            slot_detail_component_1.SlotDetailComponent,
            schedule_matrix_component_1.ScheduleMatrixComponent,
            ng2_file_upload_1.FileSelectDirective,
            ng2_file_upload_1.FileDropDirective
        ],
        imports: [
            router_1.RouterModule.forRoot([
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'compute', component: schedule_compute_component_1.ScheduleComputeComponent },
                { path: 'settings', component: constraint_editor_component_1.ConstraintEditorComponent },
                { path: '*', component: home_component_1.HomeComponent }
            ]),
            ng2_modal_1.ModalModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng2_drag_drop_1.Ng2DragDropModule
        ],
        providers: [constraint_service_1.ConstraintService,
            schedule_service_1.ScheduleService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map