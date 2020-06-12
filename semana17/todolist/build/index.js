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
const app = express_1.default();
app.use(express_1.default.json());
const createEndPointUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = {
            id: req.body.id,
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
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
//# sourceMappingURL=index.js.map