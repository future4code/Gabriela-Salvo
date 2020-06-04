import { User } from "./User"

enum TEACHER_SPECIALITY {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    POO = "POO",
    BACKEND = "BACKEND"


}

export class Teacher implements User {
    id: number
    name: string
    email: string
    birthDay: moment.Moment
    specialities: TEACHER_SPECIALITY[]

}