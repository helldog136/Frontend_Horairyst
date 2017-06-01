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
 * Created by helldog136 on 17/05/17.
 */
var core_1 = require("@angular/core");
var constraint_service_1 = require("./constraint.service");
var ConstraintEditorComponent = (function () {
    function ConstraintEditorComponent(constraintService) {
        this.constraintService = constraintService;
        this.sampleConstraint = { constraint: 'Sample Constraint', type: 'test',
            content: '@testConstraint\nclass MyAwesomeConstraint(Strong/WeakConstraint):\n' +
                '    def computeConstraint(self, problem):\n        pass\n\n    def checkValidity(self, X, Y, S, P, E, R, C):\n' +
                '        pass\n    def getMaxValue(self, problem):\n        return 0\n' +
                '    def getMinValue(self, problem):\n        return 0' };
        this.selectedConstraint = Object.assign({}, this.sampleConstraint);
        this.currentIndex = -1;
    }
    ConstraintEditorComponent.prototype.ngOnInit = function () { };
    ConstraintEditorComponent.prototype.setSelectedConstraint = function (array, index) {
        this.selectedConstraint = Object.assign({}, array[index]);
    };
    ConstraintEditorComponent.prototype.saveChanges = function () {
        if (this.selectedConstraint.type === 'strong') {
            this.constraintService.getConstraints().strong[this.currentIndex] = this.selectedConstraint;
            this.constraintService.sendStrongConstraints();
        }
        else if (this.selectedConstraint.type === 'weak') {
            this.constraintService.getConstraints().weak[this.currentIndex] = this.selectedConstraint;
            this.constraintService.sendWeakConstraints();
        }
        else {
            console.log('Haha the current constraint is neither a strong nor a' +
                ' weak constraint! it\'s a constraint of type ' + this.selectedConstraint.type + ' !');
        }
    };
    return ConstraintEditorComponent;
}());
ConstraintEditorComponent = __decorate([
    core_1.Component({
        selector: 'constraint-editor',
        template: require('./constraint_editor.component.html')
    }),
    __metadata("design:paramtypes", [constraint_service_1.ConstraintService])
], ConstraintEditorComponent);
exports.ConstraintEditorComponent = ConstraintEditorComponent;
//# sourceMappingURL=constraint_editor.component.js.map