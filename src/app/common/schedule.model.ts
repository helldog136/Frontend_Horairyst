/**
 * Created by helldog136 on 6/02/17.
 */

export interface ScheduleMatrix {
  sessions: Array<String>;
  periods: Array<String>;
  matrix: Array<Array<MatrixSlot>>;
}
export interface MatrixSlot {
  i?: number;
  j?: number;
  student: String;
  teachers: Array<Teacher>;
  validity: Validity;
}

export interface Teacher {
  name: String;
  role: String;
}
export interface Validity {
  value: boolean;
  reasons: Array<String>;
}

export interface Schedule {
  linear: LinearSchedule;
  matrix: ScheduleMatrix;
  latex: string;
}

export interface LinearSchedule {
    slots: Array<Slot>;
}

export interface Slot {
    hour: string;
    room: string;
    student: string;
    teachers: Array<Teacher>;
  validity: Validity;
}
