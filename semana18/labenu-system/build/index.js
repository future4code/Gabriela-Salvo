"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
const Teacher_1 = require("./Teacher");
const Teacher_2 = require("./Teacher");
const moment = require("moment");
moment.locale("pt-br");
const newStudent = new Student_1.Student(1, "Erikinha", "erika@erika.com", moment("10/10/10", "DD/MM/YY"), ["Implicar comigo, comer brigadeiro, cantar a grande familia para Ivana"]);
console.log(newStudent);
const newTeacher = new Teacher_1.Teacher(32, "Professor Bananinha", "banana@verde.com", moment("10/10/10"), [Teacher_2.TEACHER_SPECIALITY.BACKEND]);
console.log(newTeacher);
//# sourceMappingURL=index.js.map