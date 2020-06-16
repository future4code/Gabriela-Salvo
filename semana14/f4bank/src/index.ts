import * as fs from 'fs'
import { stringify } from 'querystring'
import { type } from 'os'
export {usuario, contaDoUsuario}

const anoHoje: number = new Date().getFullYear()

type usuario = {
    name: string,
    anoNascimento: number,
    cpf: number,
    extrato: number
    
}

type extrato = {
    value: number,
    data: number,
    descricao: string
}

const contaDoUsuario: usuario = {
    name: String(process.argv[2]),
    anoNascimento: Number(process.argv[3]),
    cpf: Number(process.argv[4]),
    extrato:Number(process.argv[5])
   
  

}


const accounts: usuario[] = require("../contas.json")
export const contas: string ="contas.json"


function criarConta(contaDoUsuario: usuario): any {


    let ano = anoHoje - contaDoUsuario.anoNascimento
    if (ano < 18) {
        console.log("Você não pode criar uma conta.")
    } else {

        const resultadoBusca = accounts.find((account) => {
            return account.cpf === contaDoUsuario.cpf
        })
        if (resultadoBusca === undefined) {
            try {
                accounts.push(contaDoUsuario)

                fs.writeFileSync("contas.json", JSON.stringify(accounts))
                console.log("Conta criada com sucesso!")

            } catch (error) {
                console.error(error)

            }

        } else {
            console.log("Usuário já cadastrado!")
        }
        console.log(resultadoBusca)

    }
}
criarConta(contaDoUsuario)
