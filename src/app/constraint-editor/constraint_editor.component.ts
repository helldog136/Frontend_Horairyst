/**
 * Created by helldog136 on 17/05/17.
 */
import {Component, OnInit} from '@angular/core';
import {Constraint} from './constraint.model';
import {ConstraintService} from './constraint.service';

@Component({
  selector: 'constraint-editor',
  template: require('./constraint_editor.component.html')
})
export class ConstraintEditorComponent implements OnInit {
  sampleConstraint: Constraint = {constraint: 'Sample Constraint', type: 'test',
  content: '@testConstraint\nclass MyAwesomeConstraint(Strong/WeakConstraint):\n' +
  '    def computeConstraint(self, problem):\n        pass\n\n    def checkValidity(self, X, Y, S, P, E, R, C):\n' +
  '        pass\n    def getMaxValue(self, problem):\n        return 0\n' +
  '    def getMinValue(self, problem):\n        return 0'}
  private selectedConstraint: Constraint = Object.assign({}, this.sampleConstraint);
  private currentIndex: number = -1;
  constructor(public constraintService: ConstraintService) { }

  ngOnInit() {}

  setSelectedConstraint(array: Array<Constraint>, index: number): void{
    this.selectedConstraint = Object.assign({}, array[index]);
  }

  saveChanges(): void {
    if (this.selectedConstraint.type === 'strong') {
      this.constraintService.getConstraints().strong[this.currentIndex] = this.selectedConstraint;
      this.constraintService.sendStrongConstraints();
    }else if (this.selectedConstraint.type === 'weak') {
      this.constraintService.getConstraints().weak[this.currentIndex] = this.selectedConstraint;
      this.constraintService.sendWeakConstraints();
    }else {
      console.log('Haha the current constraint is neither a strong nor a' +
        ' weak constraint! it\'s a constraint of type ' + this.selectedConstraint.type + ' !');
    }
  }
}
