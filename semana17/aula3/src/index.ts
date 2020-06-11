import knex from "knex";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { AddressInfo } from "net";
import { Request, Response } from "express"
import { stringify } from "querystring";

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
});

//b

const findActor = async(name:string):Promise<any>=>{
    const result = await connection.raw(
        `
        SELECT* FROM Actor WHERE name = "${name}"
        `
    )
    console.log(result)
}

//EXERCICIO 2
//a)
// const updateSalary = async(id:string, salary:number):Promise<void>=>{
//     await connection
//     .update({
//         id:id,
//         salary:salary
//     }).into("Actor")
//     .where("id", id)

// }
// updateSalary("002",800)

//b)
// const deleteActor = async(id:string):Promise<void>=>{
//     await connection
//     .del().into("Actor")
//     .where("id", id)

// }
// deleteActor("005")
//c)
// const salaryByGender = async(gender:string):Promise<any>=>{
//     const result = await connection

//     .avg("salary as average").into("Actor")
//     .where({gender});
// console.log(result)

// }
// salaryByGender("female")
