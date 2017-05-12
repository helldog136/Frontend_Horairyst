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
 * Created by helldog136 on 6/02/17.
 */
var core_1 = require("@angular/core");
var SlotDetailComponent = (function () {
    function SlotDetailComponent() {
    }
    SlotDetailComponent.prototype.doExperiment = function () {
    };
    ;
    return SlotDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SlotDetailComponent.prototype, "slot", void 0);
SlotDetailComponent = __decorate([
    core_1.Component({
        selector: 'slot',
        template: require('./slot.detail.component.html'),
        styles: ["\n    .slot {\n      cursor: pointer;\n      outline: 1px lightgray solid;\n      padding: 5px;\n      margin: 5px;\n    }\n  "]
    })
], SlotDetailComponent);
exports.SlotDetailComponent = SlotDetailComponent;
//# sourceMappingURL=slot.detail.component.js.map