/**
 * Created by helldog136 on 6/02/17.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_file_upload_1 = require("ng2-file-upload");
var schedule_service_1 = require("../common/schedule.service");
var ScheduleComputeComponent = (function () {
    function ScheduleComputeComponent(scheduleService) {
        this.scheduleService = scheduleService;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: schedule_service_1.API_URL + '/file' });
        this.hasDropZoneOver = false;
        this.oldFile = null;
        this.title = 'Submit Schedule Page';
        this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
        };
        this.uploader.onCompleteItem = this.scheduleService.getScheduleReceiverCallback();
    }
    ScheduleComputeComponent.prototype.ngOnInit = function () {
    };
    ScheduleComputeComponent.prototype.fileOverUploader = function (e) {
        this.hasDropZoneOver = e;
        this.update();
        if (this.oldFile !== this.uploader.queue[0]) {
            this.scheduleService.clear();
        }
    };
    ScheduleComputeComponent.prototype.update = function () {
        this.uploader.queue.reverse();
        while (this.uploader.queue.length > 1) {
            this.uploader.queue.pop();
            this.scheduleService.clear();
        }
        this.hasFiles = this.uploader.queue.length > 0;
        if (!this.hasFiles) {
            this.scheduleService.clear();
        }
    };
    ScheduleComputeComponent.prototype.reoptimize = function () {
        this.scheduleService.reoptimizeSchedule();
    };
    return ScheduleComputeComponent;
}());
ScheduleComputeComponent = __decorate([
    core_1.Component({
        selector: 'schedule_compute',
        template: require('./schedule_compute.component.html'),
        styles: [require('./schedule_compute.component.css').toString()]
    }),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService])
], ScheduleComputeComponent);
exports.ScheduleComputeComponent = ScheduleComputeComponent;
//# sourceMappingURL=schedule_compute.component.js.map