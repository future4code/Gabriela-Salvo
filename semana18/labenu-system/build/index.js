"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
const FullTimeMission_1 = require("./FullTimeMission");
const Teacher_1 = require("./Teacher");
const Teacher_2 = require("./Teacher");
const moment = require("moment");
const WriteFile_1 = require("./WriteFile");
const newStudent = new Student_1.Student(1, "Erikinha", "erika@erika.com", moment("10/10/10", "10/10/10"), ["Implicar comigo, comer brigadeiro, cantar a grande familia para Ivana"]);
const lukeSkywalker = new Teacher_1.Teacher(2, "Tio Luke Skywalker", "lukesky@forcestrong.com", moment("10/10/10", "DD/MM/YY"), [Teacher_2.TEACHER_SPECIALITY.BACKEND]);
const leiaOrgana = new Teacher_1.Teacher(1, "Gerenal Organa", "organa@forcestrong.com", moment("10/10/10", "DD/MM/YY"), [Teacher_2.TEACHER_SPECIALITY.REACT, Teacher_2.TEACHER_SPECIALITY.REDUX]);
const reySkywalker = new Teacher_1.Teacher(3, "Rey Palpatine Skywalker", "rey@forcestrong.com", moment("10/10/10", "DD/MM/YY"), [Teacher_2.TEACHER_SPECIALITY.REACT, Teacher_2.TEACHER_SPECIALITY.TYPESCRIPT]);
const finn = new Teacher_1.Teacher(2187, "Finn FN-2187", "finn@forcestrong.com", moment("10/10/10", "DD/MM/YY"), [Teacher_2.TEACHER_SPECIALITY.REACT, Teacher_2.TEACHER_SPECIALITY.CSS, Teacher_2.TEACHER_SPECIALITY.POO]);
const classSkywalker = new FullTimeMission_1.FullTimeMisson("Pequenos Padawans do Backend", "Pequenos Padawans do Backend", moment("10/10/10", "DD/MM/YY"), moment("10/10/10", "DD/MM/YY"), [lukeSkywalker], [newStudent], 1);
const classRavenclaw = new FullTimeMission_1.FullTimeMisson("Turma Corvinal", "Hogwarts", moment("10/10/10", "DD/MM/YY"), moment("10/10/10", "DD/MM/YY"), [lukeSkywalker], [newStudent], 3);
const novoJSON = new WriteFile_1.WriteFile('students.json');
novoJSON.writeJSON(newStudent);
//# sourceMappingURL=index.js.map