import express from "express";
import { AddressInfo } from "net";
import { IdGenerator } from "./service/IdGenerator"

import knex from "knex";
import dotenv from "dotenv";
import { connect } from "http2";

dotenv.config();

const userTableName = "User";

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




const newId: IdGenerator = new IdGenerator()

console.log(newId.generateId())

const idNovo: IdGenerator = new IdGenerator()



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

const createUser= async (): Promise<any>=> {

  const response = await connection.raw(
    `
    Create table userTableName (
      id varchar(255) primary key,
      email varchar (255) not null,
      password varchar (255) not null
    )
    
    `
  )
}
// createUser()


const insertIntoTable = async(id:string, email:string, password:string):Promise<any> =>{
  const response = await connection.raw (
    `
    INSERT INTO userTableName 
    VALUES (
      "${id}",
      "${email}",
      "${password}"
    )
    
    
    `
  )
}
insertIntoTable("001", "kylo_ren@starkiller.com","123")