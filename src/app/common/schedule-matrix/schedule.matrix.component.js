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
 * Created by helldog136 on 4/04/17.
 */
var core_1 = require("@angular/core");
var schedule_service_1 = require("../schedule.service");
var ScheduleMatrixComponent = (function () {
    function ScheduleMatrixComponent(scheduleService) {
        this.scheduleService = scheduleService;
        this.DEFAULTSLOT = { i: 0, j: 0, student: '', teachers: [], validity: { value: true, reasons: [] } };
        this.editedSlot = this.DEFAULTSLOT;
        this.mouseOver = { i: -1, j: -1 };
    }
    ScheduleMatrixComponent.prototype.getMatrix = function () {
        return this.scheduleService.getMatrix();
    };
    ScheduleMatrixComponent.prototype.onItemDrop = function (e, toI, toJ) {
        var fromI = e.dragData.i;
        var fromJ = e.dragData.j;
        while (toI > this.getMatrix().sessions.length) {
            toI = toI - 1;
        }
        while (toJ > this.getMatrix().periods.length) {
            toJ = toJ - 1;
        }
        console.log(e, fromI, fromJ, '<->', toI, toJ, '-------', this.getMatrix(), this.getMatrix().matrix);
        var tmp = this.getMatrix().matrix[toJ][toI];
        this.getMatrix().matrix[toJ][toI] = this.getMatrix().matrix[fromJ][fromI];
        this.getMatrix().matrix[fromJ][fromI] = tmp;
        console.log('res', this.getMatrix());
        this.scheduleService.checkSchedule();
    };
    ScheduleMatrixComponent.prototype.closeModal = function (editModal) {
        editModal.close();
    };
    ScheduleMatrixComponent.prototype.onCloseModal = function () {
        this.editedSlot = this.DEFAULTSLOT;
        this.scheduleService.checkSchedule();
        console.log(this.getMatrix());
    };
    ScheduleMatrixComponent.prototype.edit = function (editModal, i, j) {
        if (editModal && editModal.isOpened) {
            this.closeModal(editModal);
        }
        this.setEditedSlot(j, i);
        editModal.open();
    };
    ScheduleMatrixComponent.prototype.setEditedSlot = function (j, i) {
        this.editedSlot = this.getMatrix().matrix[j][i];
        this.editedSlot.i = i;
        this.editedSlot.j = j;
    };
    ScheduleMatrixComponent.prototype.addEmptyTeacher = function () {
        console.log('adding teacher');
        console.log(this.getMatrix().matrix[this.editedSlot.j][this.editedSlot.i].teachers.length);
        this.getMatrix().matrix[this.editedSlot.j][this.editedSlot.i].teachers.push({ name: 'new' + Math.random().toString(), role: 'D' });
        console.log(this.getMatrix().matrix[this.editedSlot.j][this.editedSlot.i].teachers.length);
    };
    ScheduleMatrixComponent.prototype.removeTeacher = function (l, modal) {
        this.getMatrix().matrix[this.editedSlot.j][this.editedSlot.i].teachers.splice(l, 1);
        modal.open();
    };
    ScheduleMatrixComponent.prototype.removeSlot = function (i, j) {
        this.getMatrix().matrix[j][i] = this.DEFAULTSLOT;
    };
    ScheduleMatrixComponent.prototype.addSession = function () {
        this.getMatrix().sessions.push('newSession' + Math.random().toString());
        for (var j = 0; j < this.getMatrix().matrix.length; j++) {
            this.getMatrix().matrix[j].push(this.DEFAULTSLOT);
        }
    };
    ScheduleMatrixComponent.prototype.removeSession = function (i) {
        this.getMatrix().sessions.splice(i, 1);
        for (var j = 0; j < this.getMatrix().matrix.length; j++) {
            this.getMatrix().matrix[j].splice(i, 1);
        }
    };
    return ScheduleMatrixComponent;
}());
ScheduleMatrixComponent = __decorate([
    core_1.Component({
        selector: 'schedule-matrix',
        template: require('./schedule.matrix.component.html'),
        styles: [require('./schedule.matrix.component.css').toString()]
    }),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService])
], ScheduleMatrixComponent);
exports.ScheduleMatrixComponent = ScheduleMatrixComponent;
//# sourceMappingURL=schedule.matrix.component.js.map