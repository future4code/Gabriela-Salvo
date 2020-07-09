"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name, password, email, role) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.role = role;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
    getPassword() {
        return this.role;
    }
}
exports.User = User;
