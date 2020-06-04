import { User } from "./User"
import * as moment from 'moment'

export class Student implements User {
    public hobbies: string[]

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public birthDay:string,
        hobbies: string[],
    ) {
        this.id = id
        this.name = name
        this.email = email
        this.birthDay = birthDay
        this.hobbies = hobbies

    }
    public getAge(): number {
        return moment().diff(this.birthDay, "years");
    }

}
