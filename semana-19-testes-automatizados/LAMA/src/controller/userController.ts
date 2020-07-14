import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/userDatabase";
import { HashGenerator } from "../services/HashGenerator";
import { IdGenerator } from "../services/idGenerator";


export class UserController {
  private static UserBusiness = new UserBusiness(
    new UserDatabase(),
    new HashGenerator(),
    new Authenticator(),
    new IdGenerator()
  );
  public async signup(req: Request, res: Response) {
    try {
      const result = await UserController.UserBusiness.signup(
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
   public async login(req: Request, res: Response) {
     const email = req.body.email;
     const password = req.body.password;
     try {
       const result = await UserController.UserBusiness.login(email, password);
       res.status(200).send(result);
     } catch (err) {
       res.status(err.errorCode || 400).send({ message: err.message });
     }
   }
}