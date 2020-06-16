import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import knex from 'knex'
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


const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

const newId = new IdGenerator
 const id = newId.idGenerator()

const newJwt = new JwtAuthentiator
console.log(newJwt.generateToken(id))