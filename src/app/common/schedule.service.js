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
/**
 * Created by helldog136 on 18/04/17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
exports.API_URL = 'http://backend.horairyst.deweireld.be';
var ScheduleService = (function () {
    function ScheduleService(http) {
        this.http = http;
    }
    ScheduleService.prototype.hasSchedule = function () {
        return this.schedule != null;
    };
    ScheduleService.prototype.setSchedule = function (neww) {
        this.schedule = neww;
    };
    ScheduleService.prototype.clear = function () {
        this.schedule = null;
    };
    ScheduleService.prototype.getScheduleReceiverCallback = function () {
        var that = this;
        return function (item, response, status, headers) {
            console.log(status + ' : ' + response);
            if (status === 200) {
                console.log(that);
                that.setSchedule(JSON.parse(response));
                console.log(that.schedule);
            }
        };
    };
    ScheduleService.prototype.checkSchedule = function () {
        if (this.hasSchedule()) {
            var that_1 = this;
            this.http.post(exports.API_URL + '/checkMatrix', this.schedule.matrix)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { that_1.schedule = data; }, function (err) { return console.log(err); });
        }
        else {
            console.log('no Schedule!!!');
        }
    };
    ScheduleService.prototype.reoptimizeSchedule = function () {
        if (this.hasSchedule()) {
            var that_2 = this;
            this.http.post(exports.API_URL + '/reoptimize', this.schedule.matrix)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { that_2.schedule = data; }, function (err) { return console.log(err); });
        }
        else {
            console.log('no Schedule!!!');
        }
    };
    ScheduleService.prototype.getSchedule = function () {
        return this.schedule;
    };
    ScheduleService.prototype.getMatrix = function () {
        return this.schedule.matrix;
    };
    ScheduleService.prototype.getLatex = function () {
        return this.schedule.latex;
    };
    return ScheduleService;
}());
ScheduleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map