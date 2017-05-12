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
var ScheduleCheckerComponent = (function () {
    function ScheduleCheckerComponent() {
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'http://localhost:4242/check' });
        this.hasDropZoneOver = false;
        this.oldFile = null;
        this.title = 'Check Schedule Page';
        this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
        };
        var that = this;
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log(status + ' : ' + response);
            if (status === '200') {
                that.schedule = JSON.parse(response);
                console.log(that.schedule);
            }
        };
    }
    ScheduleCheckerComponent.prototype.fileOverUploader = function (e) {
        this.hasDropZoneOver = e;
        this.update();
        if (this.oldFile !== this.uploader.queue[0]) {
            this.schedule = null;
        }
    };
    ScheduleCheckerComponent.prototype.update = function () {
        this.uploader.queue.reverse();
        while (this.uploader.queue.length > 1) {
            this.uploader.queue.pop();
        }
        this.hasFiles = this.uploader.queue.length > 0;
        if (!this.hasFiles) {
            this.schedule = null;
        }
    };
    return ScheduleCheckerComponent;
}());
ScheduleCheckerComponent = __decorate([
    core_1.Component({
        selector: 'schedule_checker',
        template: require('./schedule_checker.component.html')
    }),
    __metadata("design:paramtypes", [])
], ScheduleCheckerComponent);
exports.ScheduleCheckerComponent = ScheduleCheckerComponent;
//# sourceMappingURL=schedule_checker.component.js.map