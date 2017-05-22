/**
 * Created by helldog136 on 17/05/17.
 */
import {Component, OnInit} from '@angular/core';
import {Constraint} from './constraint.model.js';

@Component({
  selector: 'constraint-editor',
  template: require('./constraint_editor.component.html')
})
export class ConstraintEditorComponent implements OnInit {
  private selectedConstraint: Constraint = {constraint: 'Sample Constraint', type: 'test', content: 'hello world'};
  constructor() { }

  ngOnInit() {

  }
}
