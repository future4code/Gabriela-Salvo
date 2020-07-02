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
Object.defineProperty(exports, "__esModule", { value: true });
const userBusiness_1 = require("../business/userBusiness");
const Authenticator_1 = require("../services/Authenticator");
const userDatabase_1 = require("../data/userDatabase");
const HashGenerator_1 = require("../services/HashGenerator");
const idGenerator_1 = require("../services/idGenerator");
class UserController {
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield UserController.UserBusiness.signup(req.body.name, req.body.email, req.body.password, req.body.role);
                res.status(200).send(result);
            }
            catch (err) {
                res.status(err.errorCode || 400).send({ message: err.message });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.body.email;
            const password = req.body.password;
            try {
                const result = yield UserController.UserBusiness.login(email, password);
                res.status(200).send(result);
            }
            catch (err) {
                res.status(err.errorCode || 400).send({ message: err.message });
            }
        });
    }
}
exports.UserController = UserController;
UserController.UserBusiness = new userBusiness_1.UserBusiness(new userDatabase_1.UserDatabase(), new HashGenerator_1.HashGenerator(), new Authenticator_1.Authenticator(), new idGenerator_1.IdGenerator());
