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

const app = express();



// app.use(express.json());
// const getActorById = async (id: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT * FROM Actor WHERE id = '${id}'
//     `)

//       return result[0][0]
//   }

// app.get("/actor/:id", async (req: Request, res: Response) => {
//     try {
//       const id = req.params.id;
//       const actor = await getActorById(id);

//       res.status(200).send(actor)
//     } catch (err) {
//       res.status(400).send({
//         message: err.message,
//       });
//     }
//   });
// const getActor = async (): Promise<any> => {
//     const result = await connection.select("*").from("Actor")

//     return result
// }

// app.get("/actor", async (re: Request, res: Response) => {
//     try {
//         const result = await getActor()
//         res.status(200).send(result)
//     } catch (err) {
//         res.status(400).send({ error: err.message })
//     }
// })

                // DAQUI PRA BAIXO SO EXERCICIOS QUE FIZ PARA FIXAR ALGUNS CONCEITOS

                // const app = express();

                // app.use(express.json());
                // try {
                    //     const createProductsTable = async (): Promise<any> => {
                        //         await connection.raw(
                            //             `
                            //             CREATE TABLE products
                            //             (id VARCHAR(255) PRIMARY KEY,
                            //             name VARCHAR(255) UNIQUE NOT NULL,
//             price FLOAT NOT NULL

//             )
//             `
//         )
//     }

//     // createProductsTable()
// }catch(error) {
//     console.error("Erro")
// }




// try {
//     const createProducts = async (id:string, name:string, price:number): Promise<string> => {
//        const result = await connection.raw(
//             `
//            INSERT INTO products 
//                VALUES('${id}', '${name}', ${price})

//             `
//         )
//         return result
//     }
//     console.log(createProducts("003","Controle PS4", 230.00),"Adicionando item")

// }catch(error) {
//     console.error("Erro")
// }

// const getAllProducts = async(): Promise<any>=>{
//     const result = await connection.raw(
//         `
//         SELECT * FROM products`
//     )
//     console.log(result[0][0])

// }
// getAllProducts()

// try {//USANDO CONNECTION SELECT
//     const getAllProducts = async (): Promise<any> => {
//         const result = await connection.select("*").from("products")

//         console.log(result)
//     }
//     getAllProducts()
// }catch(error){
//     console.log(error)
// }



// const getActorById = async (id: string): Promise<any> => {
//     const result = await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//     `)

//     return console.log(result[0][0])

// }

// const server = app.listen(process.env.PORT || 3000, () => {
//     if (server) {
//         const address = server.address() as AddressInfo;
//         console.log(`Server is running in http://localhost:${address.port}`);
//     } else {
//         console.error(`Failure upon starting server.`);
//     }
// });
// getActorById('002')