import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/userDatabase";
import { HashGenerator } from "../services/HashGenerator";
import { IdGenerator } from "../services/idGenerator";



export class BandController {
    private static BandBusiness = new BandBusiness(
        new BandDatabase(),
        new Authenticator(),
        new IdGenerator()
    )
    
    public async createBand(req:Request, res:Response) {

        try {
            const result = await BandController.BandBusiness.createBand(
                req.body.id,
                req.body.name,
                req.body.music_genre,
                req.body.responsible
            )
            res.status(200).send(result);


        }catch (err) {
            res.status(err.errorCode || 400).send({ message: err.message });
          }
        }
    }


}
