// 1. Constructor nos deixa acessar informações do objeto ao longo do programa


import JSONFileManager from './JSONFileManager'
import Transaction from './Transaction'
import Bank from './Bank'

export default class UserAccount {
    private balance: number;
    private cpf: string;
    private name: string;
    private age: number;
    private transactions: Transaction[];

    constructor(
        balance: number = 0,
        cpf: string,
        name: string,
        age: number,
        transactions: Transaction[] = []) {

        console.log("Chamando o construtor da classe UserAccount")
        this.balance = balance;
        this.cpf = cpf;
        this.name = name;
        this.age = age; //estava escrito Number como se fosse uma tipagem
        this.transactions = transactions
    }

    public getBalance(): any {
        return this.balance
    }

    public addBalance(value: number): void {
    this.balance +=value
        
        console.log('Saldo atualizado com sucesso')
    }

}
const account: UserAccount = new UserAccount(0, "123.123.123.12", "Gabriela", 28, [])

console.log(`O saldo dessa conta é ${account.getBalance()} `)
account.addBalance(15)
console.log(account)
console.log('o novo saldo é',  account.getBalance())