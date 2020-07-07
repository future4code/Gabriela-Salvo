import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { Request, Response } from "express"



//*******************************CONFIGURAÇÃO DA CONEXÃO***************************************/





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


/************************************CRIANDO TABELA USANDO RAW***********************************/




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




/**************************************CRIAR TABLE TASK************************************/





const createTableTask = async (): Promise<void> => {
    await connection.raw(
        `
        CREATE TABLE TodoTableTask (
            id VARCHAR (255) PRIMARY KEY,
            title VARCHAR (255) NOT NULL,
            description TEXT NOT NULL,
            status ENUM("to_do", "doing", "done") NOT NULL DEFAULT "to_do",
            limit_date DATE NOT NULL,
            creator_user_id VARCHAR (255) NOT NULL,
            FOREIGN KEY (creator_user_id) REFERENCES user(id)
            )
            
            `
    )
}
// createTableTask()





/************************************CRIANDO TASK INSERT INTO**********************************/




const createTasks = async (id: string, title: string, description: string, status: string, limit_date: Date, creator_user_id: string): Promise<any> => {


    try {
        await connection.insert({
            id,
            title,
            description,
            status,
            limit_date,
            creator_user_id
        }).into("TodoTableTask")

    }catch(err) {
        console.log(err)
    }
}
    //createTasks("01", "Criando primeira Tarefa", "Tarefa criada", "doing", new Date("2021-02-12"),"c")

//     try {
//         const result = await connection.raw(
//             `
//         INSERT INTO TodoTableTask 
//         VALUES (
//             "${id}", "${title}", "${description}", "${status}", "${limit_date}", "${creator_user_id}"
//         )
        
//         `   )


//     } catch (err) {
//         console.error(err)
//     }
// }









/**************************************CRIAR USUARIO COM RAW************************************/



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





/****************************************FUNCAO PARA BUSCAR ID***************************************/


const getUserById = async (id: string): Promise<any> => {
    try {

        const result = await connection.select("*").from("user").where({ id: id })
        return result

    } catch (err) {
        console.log(err)
    }
}

// getUserById("a")




/****************************************FUNCAO PEGAR TASK POR ID**********************************/




const getTaskById = async (id: string): Promise<any> => {
    try {

        const result = await connection.select("*").from("TodoTableTask").where({ id: id })
        return result

    } catch (err) {
        console.log(err)
    }
}

/****************************************FUNCAO EDITAR USER**********************************/




const changeDataUser = async (id: string, name: string, nickname: string): Promise<any> => {
    try {
        const result = await connection.raw(
            `
                UPDATE user
                SET name ="${name}", nickname = "${nickname}"
                WHERE id ="${id}"
                
                `
        )
        return result
    } catch (err) {
        console.error(err)
    }
}

// changeDataUser("c", "Eugene", "Sirigueijo")





/**************************CONFIGURANDO EXPRESS*********************************************/




const app = express()
app.use(express.json())





/*********************************ENDPOINT CRIAR USUARIO**********************************************/





const createEndPointUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const newUser = {
            id: Date.now().toString(),
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        }

        await createUser(newUser.id, newUser.name, newUser.nickname, newUser.email)

        res.status(200).send({ message: "Funcionando!!" })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
app.post("/user", createEndPointUser)



/************************************ENDPOINT PUT DE TASKS*************************************/

const createEndPoinTask = async (req: Request, res: Response): Promise<void> =>{
    try {
        const newTask = {
            id: req.body.id,
            title:req.body.title,
            description:req.body.description,
            status:req.body.status,
            limit_date:req.body.limit_date,
            creator_user_id:req.body.creator_user_id
        }

        await createTasks(newTask.id, newTask.title,newTask.description, newTask.status, newTask.limit_date, newTask.creator_user_id)
        res.status(200).send({message:"To do criado com sucesso!"})
    }catch(err){
        res.status(400).send({error:err.message})
    }
}
app.post("/task", createEndPoinTask)





/************************************ENDPOINT GET BUSCAR USER POR ID*********************************/




const createEndPointId = async (req: Request, res: Response): Promise<void> => {


    try {
        const id = req.params.id;
        const result = await getUserById(id)

        res.status(200).send(result[0])
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
app.get("/user/:id", createEndPointId)




/************************************ENDPOINT PEGAR TASK POR ID*************************************/





const createEndTaskById= async (req: Request, res: Response): Promise<void> => {


    try {
        const id = req.params.id;
        const result = await getTaskById(id)

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
app.get("/task/:id", createEndTaskById)

/************************************ENDPOINT PUT PARA EDITAR USER*************************************/




const createEndPointEditData = async (req: Request, res: Response): Promise<any> => {
    try {

        const id = req.params.id
        const name = req.body.name
        const nickname = req.body.nickname

        await changeDataUser(id, name, nickname)
        res.status(200).send({ message: "Usuário alterado" })
    } catch (err) {
        res.status(400).send({ err: err.message })
    }
}
app.put("/user/edit/:id", createEndPointEditData)
// changeDataUser



/*******************************************CONFIGURANDO SERVER****************************************/




const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando :) http://localhost:${address.port}`);
    } else {
        console.error(`Falha em rodar o servidor. Tente novamente.`);
    }
});



/********************************************************************************************************/

















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