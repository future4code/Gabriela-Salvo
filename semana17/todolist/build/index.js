"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const connection = knex_1.default({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
});
const createTableUser = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connection.raw(`
        CREATE TABLE user (
            id VARCHAR (255) PRIMARY KEY,
            name VARCHAR (255) NULL,
            nickname VARCHAR (255) UNIQUE NOT NULL,
            email VARCHAR (255) UNIQUE NOT NULL
            )
            
            `);
});
const createTableTask = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connection.raw(`
        CREATE TABLE TodoTableTask (
            id VARCHAR (255) PRIMARY KEY,
            title VARCHAR (255) NOT NULL,
            description TEXT NOT NULL,
            status ENUM("to_do", "doing", "done") NOT NULL DEFAULT "to_do",
            limit_date DATE NOT NULL,
            creator_user_id VARCHAR (255) NOT NULL,
            FOREIGN KEY (creator_user_id) REFERENCES user(id)
            )
            
            `);
});
const createTasks = (id, title, description, status, limit_date, creator_user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection.insert({
            id,
            title,
            description,
            status,
            limit_date,
            creator_user_id
        }).into("TodoTableTask");
    }
    catch (err) {
        console.log(err);
    }
});
const createUser = (id, name, nickname, email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield connection.raw(`
                INSERT INTO user
                VALUES (
                    "${id}","${name}","${nickname}","${email}"
                )
                `);
    }
    catch (err) {
        console.error(err);
    }
});
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield connection.select("*").from("user").where({ id: id });
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
const getTaskById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield connection.select("*").from("TodoTableTask").where({ id: id });
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
const changeDataUser = (id, name, nickname) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield connection.raw(`
                UPDATE user
                SET name ="${name}", nickname = "${nickname}"
                WHERE id ="${id}"
                
                `);
        return result;
    }
    catch (err) {
        console.error(err);
    }
});
const app = express_1.default();
app.use(express_1.default.json());
const createEndPointUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = {
            id: Date.now().toString(),
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        };
        yield createUser(newUser.id, newUser.name, newUser.nickname, newUser.email);
        res.status(200).send({ message: "Funcionando!!" });
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
});
app.post("/user", createEndPointUser);
const createEndPoinTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTask = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            limit_date: req.body.limit_date,
            creator_user_id: req.body.creator_user_id
        };
        yield createTasks(newTask.id, newTask.title, newTask.description, newTask.status, newTask.limit_date, newTask.creator_user_id);
        res.status(200).send({ message: "To do criado com sucesso!" });
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
});
app.post("/task", createEndPoinTask);
const createEndPointId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield getUserById(id);
        res.status(200).send(result[0]);
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
});
app.get("/user/:id", createEndPointId);
const createEndTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield getTaskById(id);
        res.status(200).send(result);
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
});
app.get("/task/:id", createEndTaskById);
const createEndPointEditData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const nickname = req.body.nickname;
        yield changeDataUser(id, name, nickname);
        res.status(200).send({ message: "Usuário alterado" });
    }
    catch (err) {
        res.status(400).send({ err: err.message });
    }
});
app.put("/user/edit/:id", createEndPointEditData);
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Servidor rodando :) http://localhost:${address.port}`);
    }
    else {
        console.error(`Falha em rodar o servidor. Tente novamente.`);
    }
});
//# sourceMappingURL=index.js.map