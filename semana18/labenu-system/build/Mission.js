"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = void 0;
const moment = require("moment");
moment.locale("pt-br");
class Mission {
    constructor(classId, startDate, endDate, teachers = [], students = []) {
        this.classId = classId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.teachers = teachers;
        this.students = students;
        this.name = "";
    }
    getStartDate() {
        return this.startDate;
    }
    getEndDate() {
        return this.startDate;
    }
    getId() {
        return this.classId;
    }
    getName(name) {
        return this.name;
    }
    addStudent(student) {
        return this.students.push(student);
    }
    setName(name) {
        this.name = name;
    }
}
exports.Mission = Mission;
//# sourceMappingURL=Mission.js.map