/**
 * Created by helldog136 on 6/02/17.
 */
import {Component, Input} from '@angular/core';
import {Slot} from '../schedule.model.js';

@Component({
    selector: 'slot',
    template: require('./slot.detail.component.html'),
    styles: [`
    .slot {
      cursor: pointer;
      outline: 1px lightgray solid;
      padding: 5px;
      margin: 5px;
    }
  `]
})

export class SlotDetailComponent {
    @Input() slot: Slot;

    doExperiment(): void {
    };
}
