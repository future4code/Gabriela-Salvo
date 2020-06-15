import express from "express";
import { AddressInfo } from "net";
import { IdGenerator } from "./service/IdGenerator"

import knex from "knex";
import dotenv from "dotenv";

dotenv.config();






const id: IdGenerator = new IdGenerator()
id.generate()

console.log(id)



const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

