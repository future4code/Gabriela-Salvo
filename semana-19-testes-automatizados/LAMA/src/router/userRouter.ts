import express from "express";
import { UserController } from "../controller/userController";
//linha responsável por criar um módulo de rotas no express


export const userRouter = express.Router();
userRouter.post("/signup", new UserController().signup);
userRouter.post("/login", new UserController().login);