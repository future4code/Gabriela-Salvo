"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
//linha responsável por criar um módulo de rotas no express
exports.userRouter = express_1.default.Router();
exports.userRouter.post("/signup", new userController_1.UserController().signup);
// userRouter.post("/login", new UserController().login);
