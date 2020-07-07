import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { UserDataBase } from './data/UserDataBase'
import { JwtAuthentiator } from './services/JwtAuthentiator'
import { IdGenerator } from './services/IdGenerator'

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


app.post("/signup", async (req: Request, res: Response) => {


  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    }
    const idGenerator = new IdGenerator
    const id = idGenerator.idGenerator()

    const userDataBase = new UserDataBase()
    await userDataBase.createUser(
      id,
      userData.email,
      userData.password
    )

    const authenticator = new JwtAuthentiator()
    const token = authenticator.generateToken(id)
    res.status(200).send({
      token: token
    })

  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})


const newId = new IdGenerator
const id = newId.idGenerator()

const newJwt = new JwtAuthentiator
console.log(newJwt.generateToken(id))