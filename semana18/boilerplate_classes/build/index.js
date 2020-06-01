"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccount {
    constructor(balance = 0, cpf, name, age, transactions = []) {
        console.log("Chamando o construtor da classe UserAccount");
        this.balance = balance;
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = transactions;
    }
    getBalance() {
        return this.balance;
    }
    addBalance(value) {
        this.balance += value;
        console.log('Saldo atualizado com sucesso');
    }
}
exports.default = UserAccount;
const account = new UserAccount(0, "123.123.123.12", "Gabriela", 28, []);
console.log(`O saldo dessa conta é ${account.getBalance()} `);
account.addBalance(15);
console.log(account);
console.log('o novo saldo é', account.getBalance());
//# sourceMappingURL=index.js.map