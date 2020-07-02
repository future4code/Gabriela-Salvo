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
const baseDatabase_1 = require("./baseDatabase");
const user_1 = require("../business/entities/user");
class UserDatabase extends baseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.userTableName = "<EMPTY>";
    }
    fromDB(dbModel) {
        return (dbModel &&
            new user_1.User(dbModel.id, dbModel.name, dbModel.password, dbModel.email, dbModel.role));
    }
    createUser(band) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
      INSERT INTO ${this.userTableName} (id, name, music_genre, responsible)
      VALUES(
        '${band.getId()}',
        '${band.getName()}',
        '${band.getEmail()}',
        '${band.getPassword()}',
        '${band.getRole()}'
      )
    `);
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
      SELECT * FROM ${this.userTableName}
      WHERE id = '${id}'
    `);
            return this.fromDB(result[0][0]);
        });
    }
    getUserByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
      SELECT * FROM ${this.userTableName}
      WHERE name LIKE '%${name}%'
    `);
            return this.fromDB(result[0][0]);
        });
    }
}
exports.UserDatabase = UserDatabase;
