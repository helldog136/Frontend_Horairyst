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
 * Created by helldog136 on 22/05/17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var schedule_service_1 = require("../common/schedule.service");
var ConstraintService = (function () {
    function ConstraintService(http) {
        this.http = http;
        this.constraints = { strong: [],
            weak: [] };
        this.getStrongConstraints();
        this.getWeakConstraints();
    }
    ConstraintService.prototype.hasConstraints = function () {
        return this.constraints != null;
    };
    ConstraintService.prototype.setStrongConstraints = function (neww) {
        this.constraints.strong = neww;
    };
    ConstraintService.prototype.setWeakConstraints = function (neww) {
        this.constraints.weak = neww;
    };
    ConstraintService.prototype.clear = function () {
        this.constraints.strong.splice(0, this.constraints.strong.length);
        this.constraints.weak.splice(0, this.constraints.weak.length);
    };
    ConstraintService.prototype.getStrongConstraints = function () {
        var that = this;
        fetch(schedule_service_1.API_URL + '/strongconstraints').then(function (response) {
            return response.json();
        }).then(function (data) { that.constraints.strong = data; }).catch(function (ex) {
            console.error('Error fetching strongconstraints', ex);
        });
        // this.http.get(API_URL + '/strongconstraints')
        //   .map(res => res.json())
        //   .subscribe(
        //     (data) => {that.constraints.strong = data; },
        //     (err) => console.log(err)
        //   );
    };
    ConstraintService.prototype.getWeakConstraints = function () {
        var that = this;
        fetch(schedule_service_1.API_URL + '/weakconstraints').then(function (response) {
            return response.json();
        }).then(function (data) { that.constraints.weak = data; }).catch(function (ex) {
            console.error('Error fetching weakconstraints', ex);
        });
        // this.http.get(API_URL + '/weakconstraints')
        //   .map(res => res.json())
        //   .subscribe(
        //     (data) => {that.constraints.weak = data; },
        //     (err) => console.log(err)
        //   );
    };
    ConstraintService.prototype.getConstraints = function () {
        return this.constraints;
    };
    ConstraintService.prototype.reload = function () {
        var that = this;
        fetch(schedule_service_1.API_URL + '/reloadMods').then(function (response) {
            setTimeout(that.getStrongConstraints, 500);
            setTimeout(that.getWeakConstraints, 500);
        }).catch(function (ex) {
            console.error('Error reloading constraints', ex);
        });
    };
    ConstraintService.prototype.sendStrongConstraints = function () {
        if (this.hasConstraints()) {
            var that_1 = this;
            this.http.post(schedule_service_1.API_URL + '/strongconstraints', this.constraints.strong)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { setTimeout(that_1.getStrongConstraints, 300); }, function (err) { return console.log(err); });
        }
        else {
            console.log('no Schedule!!!');
        }
    };
    ConstraintService.prototype.sendWeakConstraints = function () {
        if (this.hasConstraints()) {
            var that_2 = this;
            this.http.post(schedule_service_1.API_URL + '/weakconstraints', this.constraints.weak)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { setTimeout(that_2.getWeakConstraints, 300); }, function (err) { return console.log(err); });
        }
        else {
            console.log('no Schedule!!!');
        }
    };
    return ConstraintService;
}());
ConstraintService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ConstraintService);
exports.ConstraintService = ConstraintService;
//# sourceMappingURL=constraint.service.js.map