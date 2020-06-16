import * as jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();


export class JWT {
    private static getExpires(): number {
        return Number(process.env.ACCES_TOKEN_EXPIRES)
    }
    public generateToken(id: string): string {
        const token = jwt.sign(
            {
                id: id
            },

            process.env.JWT_KEY as string,
            {
                expiresIn: JWT.getExpires()
            }

        )
        return token
    }
}