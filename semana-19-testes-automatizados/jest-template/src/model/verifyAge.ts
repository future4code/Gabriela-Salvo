import { Casino, LOCATION, User } from './Casino'


export function verifyAge(casino: Casino, users: User[]) {

    const allowed: User[]=[]
    const unallowed: User[]=[]

    for (const user of users) {
        if(casino.location === LOCATION.BRAZIL) {
            if(user.age  >= 21) {
                allowed.push (user)
            }else {
                unallowed.push(user)
            }
        }
    }

}
