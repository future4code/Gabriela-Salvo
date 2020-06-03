import JSONFileManager from './JSONFileManager'; 
import UserAccount from './index'

export default class Bank {
    private accounts: UserAccount[];
    private fileManager: JSONFileManager;
  
    constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
      this.accounts = accounts;
      this.fileManager = fileManager
    }
  
    // public createAccount(): void {
    //   //lógica de criar conta aqui
    // }
  
    // public getAllAccounts(): UserAccount[] {
    //   //lógica de pegar todas as contas aqui
    // }
  
    // public getAccountByCpf(): UserAccount {
    //   // lógica de pegar conta por cpf aqui
    // }
  }