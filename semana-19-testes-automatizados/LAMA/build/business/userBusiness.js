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
const User_1 = require("../model/User");
const notFoundError_1 = require("../error/notFoundError");
const invalidParameterError_1 = require("../error/invalidParameterError");
class UserBusiness {
    constructor(userDatabase, hashGenerator, tokenGenerator, idGenerator) {
        this.userDatabase = userDatabase;
        this.hashGenerator = hashGenerator;
        this.tokenGenerator = tokenGenerator;
        this.idGenerator = idGenerator;
    }
    signup(name, email, password, role) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || !email || !password) {
                throw new invalidParameterError_1.InvalidParameterError("Missing input");
            }
            if (email.indexOf("@") === -1) {
                throw new invalidParameterError_1.InvalidParameterError("Invalid email");
            }
            if (password.length < 6) {
                throw new invalidParameterError_1.InvalidParameterError("Invalid password");
            }
            const id = this.idGenerator.generate();
            const cryptedPassword = yield this.hashGenerator.hash(password);
            yield this.userDatabase.createUser(new User_1.User(id, name, email, cryptedPassword, User_1.stringToUserRole(role)));
            const accessToken = this.tokenGenerator.generate({
                id,
                role,
            });
            return { accessToken };
        });
    }
    //   public async getUserById(id: string) {
    //     const user = await this.userDatabase.getUserById(id);
    //     if (!user) {
    //       throw new NotFoundError("User not found");
    //     }
    //     return {
    //       id: user.getId(),
    //       name: user.getName(),
    //       email: user.getEmail(),
    //       role: user.getRole(),
    //     };
    //   }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email || !password) {
                throw new invalidParameterError_1.InvalidParameterError("Missing input");
            }
            const user = yield this.userDatabase.getUserByEmail(email);
            if (!user) {
                throw new notFoundError_1.NotFoundError("User not found");
            }
            const isPasswordCorrect = yield this.hashGenerator.compareHash(password, user.getPassword());
            if (!isPasswordCorrect) {
                throw new invalidParameterError_1.InvalidParameterError("Invalid password");
            }
            const accessToken = this.tokenGenerator.generate({
                id: user.getId(),
                role: user.getRole(),
            });
            return { accessToken };
        });
    }
}
exports.UserBusiness = UserBusiness;
