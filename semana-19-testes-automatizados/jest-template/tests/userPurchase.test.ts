import { User } from "../src/model/User"
import { userPurchase } from '../src/userPurchase'

describe("Testando ", ()=>{

    test("Retornar valor user", ()=>{
        const user: User = {
            user:"Astrodev",
            balance:80
        }


        const result = userPurchase(user, 50)

        expect(result).toEqual({
            ...user,
            balance:30

        })
    })
})