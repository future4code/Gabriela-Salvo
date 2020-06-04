import { User } from "./User"
import { Student } from "./Student"
import { Mission } from "./Mission"
import { FullTimeMisson } from "./FullTimeMission"
import { Teacher } from "./Teacher"
import { TEACHER_SPECIALITY  } from './Teacher'
import *as moment from 'moment'
moment.locale("pt-br")


const newStudent: Student = new Student(1,"Erikinha", "erika@erika.com",moment("10/10/10", "DD/MM/YY"),["Implicar comigo, comer brigadeiro, cantar a grande familia para Ivana"])
console.log(newStudent)

const newTeacher: Teacher = new Teacher(32, "Professor Bananinha", "banana@verde.com",moment("10/10/10"), [TEACHER_SPECIALITY.BACKEND] )
console.log(newTeacher)