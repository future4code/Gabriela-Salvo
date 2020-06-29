import { User } from './model/User'

export function userPurchase(user:User, value:number): User | string {
    if(user.balance >= value) {
        return {
            ...user,
            balance:user.balance - value
        }
    } 
    return undefined

}
