import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { Request, Response } from "express"


//*******************************CONFIGURAÇÃO DA CONEXÃO*************************************************/


dotenv.config();
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


/************************************CRIANDO TABELA USANDO RAW****************************************/




const createTableUser = async (): Promise<void> => {
    await connection.raw(
        `
        CREATE TABLE user (
            id VARCHAR (255) PRIMARY KEY,
            name VARCHAR (255) NULL,
            nickname VARCHAR (255) UNIQUE NOT NULL,
            email VARCHAR (255) UNIQUE NOT NULL
            )
            
            `
    )
}
// createTableUser()


/***********************************CRIANDO USARIO USANDO QUERIE BUILDER -- TESTE --********************/


// const createUser = async (id: string, name: string, nickname: string, email: string): Promise<any> => {
//     try {
//         const result = await connection.insert({
//             id,
//             name,
//             nickname,
//             email
//         }).into("user")

//     } catch (error) {
//         console.error(error)
//     }
// }

const createUser = async (id: string, name: string, nickname: string, email: string): Promise<any> => {
    try {
        const result = await connection.raw(
            `
                INSERT INTO user
                VALUES (
                    "${id}","${name}","${nickname}","${email}"
                )
                `

        )
    } catch (err) {
        console.error(err)
    }
}
// createUser("c", "Bob Esponja", "Calça Quadrada", "bob@fendadobikini.com")


/******************************************************************************************/




const app = express()
app.use(express.json())


const createEndPointUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const newUser = {
            id: req.body.id,
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        }

        await createUser(newUser.id, newUser.name, newUser.nickname, newUser.email)

        res.status(200).send({ message: "Funcionando!!" })
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}
app.post("/user", createEndPointUser)



const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

/******************************************************************************************/