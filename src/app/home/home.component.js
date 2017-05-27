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
var schedule_service_1 = require("../common/schedule.service");
var HomeComponent = (function () {
    function HomeComponent(scheduleService) {
        this.scheduleService = scheduleService;
        this.title = 'Horairyst Home Page';
        this.sampleFile = '';
        var that = this;
        fetch(schedule_service_1.API_URL + '/sampleinput').then(function (response) {
            return response.text();
        }).then(function (data) { that.sampleFile = data; }).catch(function (ex) {
            console.error('Error fetching sample input', ex);
        });
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: require('./home.component.html')
    }),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map