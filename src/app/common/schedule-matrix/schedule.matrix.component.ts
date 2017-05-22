/**
 * Created by helldog136 on 4/04/17.
 */
import {Component} from '@angular/core';
import {MatrixSlot, ScheduleMatrix} from '../schedule.model';
import {ScheduleService} from '../schedule.service';
import {Modal} from 'ng2-modal';

@Component({
  selector: 'schedule-matrix',
  template: require('./schedule.matrix.component.html'),
  styles: [require('./schedule.matrix.component.css').toString()]
})

export class ScheduleMatrixComponent {
  private DEFAULTSLOT: MatrixSlot = {i: 0, j: 0, student: '', teachers: [], validity: {value: true, reasons: []}};
  editedSlot: MatrixSlot = this.DEFAULTSLOT;
  private mouseOver: any = {i: -1, j: -1};

  private getMatrix(): ScheduleMatrix {
    return this.scheduleService.getMatrix();
  }

  constructor(private scheduleService: ScheduleService) {
  }

  onItemDrop(e: any, toI: number, toJ: number) {
    let fromI: number = e.dragData.i;
    let fromJ: number = e.dragData.j;

    while (toI > this.getMatrix().sessions.length){
      toI = toI - 1;
    }
    while (toJ > this.getMatrix().periods.length){
      toJ = toJ - 1;
    }

    console.log(e, fromI, fromJ, '<->', toI, toJ, '-------', this.getMatrix(), this.getMatrix().matrix);

    let tmp: MatrixSlot = this.getMatrix().matrix[toJ][toI];
    this.getMatrix().matrix[toJ][toI] = this.getMatrix().matrix[fromJ][fromI];
    this.getMatrix().matrix[fromJ][fromI] = tmp;

    console.log('res', this.getMatrix());

    this.scheduleService.checkSchedule();

  }

  closeModal(editModal: Modal) {
    editModal.close();
  }

  onCloseModal() {
    this.editedSlot = this.DEFAULTSLOT;
    this.scheduleService.checkSchedule();
    console.log(this.getMatrix());
  }

  edit(editModal: Modal, i: number, j: number) {
    if (editModal && editModal.isOpened) {
      this.closeModal(editModal);
    }

    this.setEditedSlot(j, i);

    editModal.open();
  }

  private setEditedSlot(j: number, i: number) {
    this.editedSlot = this.getMatrix().matrix[j][i];
    this.editedSlot.i = i;
    this.editedSlot.j = j;
  }

  addEmptyTeacher() {
    console.log('adding teacher');
    console.log(this.getMatrix().matrix[this.editedSlot.j][this.editedSlot.i].teachers.length);
    this.getMatrix().matrix[this.editedSlot.j][this.editedSlot.i].teachers.push({name: 'new' + Math.random().toString(), role: 'D'});
    console.log(this.getMatrix().matrix[this.editedSlot.j][this.editedSlot.i].teachers.length);
  }

  removeTeacher(l: number, modal: Modal) {
    this.getMatrix().matrix[this.editedSlot.j][this.editedSlot.i].teachers.splice(l, 1);
    modal.open();
  }

  removeSlot(i: number, j: number): void {
    this.getMatrix().matrix[j][i] = this.DEFAULTSLOT;
  }

  addSession() {
    this.getMatrix().sessions.push('newSession' + Math.random().toString());
    for (let j = 0; j < this.getMatrix().matrix.length; j++) {
      this.getMatrix().matrix[j].push(this.DEFAULTSLOT);
    }
  }

  removeSession(i: number) {
    this.getMatrix().sessions.splice(i, 1);
    for (let j = 0; j < this.getMatrix().matrix.length; j++) {
      this.getMatrix().matrix[j].splice(i, 1);
    }
  }

}
