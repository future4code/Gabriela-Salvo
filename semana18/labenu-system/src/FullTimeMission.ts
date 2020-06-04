import { Mission } from "./Mission";
import * as moment from "moment";
import { Teacher } from "./Teacher";
import { Student } from "./Student";
moment.locale("pt-br")

export class FullTimeMisson extends Mission {
  constructor(
    name: string,
    classId: string,
    startDate: moment.Moment,
    endDate: moment.Moment,
    teachers: Teacher[] = [],
    students: Student[] = [],
    // module?: number = undefined // colocar no super depois
  ) {
    super(classId, startDate, endDate, teachers, students);
  }
}
