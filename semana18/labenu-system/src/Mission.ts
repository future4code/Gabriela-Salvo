import { Student } from "./Student"
import { Teacher } from "./Teacher"
import * as moment from 'moment'

export abstract class Mission {

    private name: string = ""
    constructor(
        private classId: string,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private teachers: Teacher[] = [],
        private students: Student[] = [],
        private module?: number = undefined,


    ) { } //aqui eu inicio o contructor, porme nao eh obrigatório
    public getStartDate(): moment.Moment {
        return this.startDate
    }

    public getEndDate(): moment.Moment {
        return this.startDate
    }
    public getId(): string {
        return this.classId;
    }
    public getName(name: string): string {
        return this.name
    }
    public addStudent(student: Student) {
        return this.students.push(student)
    }
    public setName(name: string) {
        this.name = name;
    }
    public getCurrentModule(): number | undefined {
        return this.module;
    }





}