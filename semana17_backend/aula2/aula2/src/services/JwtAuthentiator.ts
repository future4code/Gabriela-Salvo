import * as jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();



export class JwtAuthentiator{
    public generateToken(id:string) {
        const token = jwt.sign ( {

            id: id
        },
        process.env.JWT_KEY as string,
        {
            expiresIn: 30
        }
        )
        return token
    }
    
   
}