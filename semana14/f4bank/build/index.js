"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const anoHoje = new Date().getFullYear();
const contaDoUsuario = {
    name: String(process.argv[2]),
    anoNascimento: Number(process.argv[3]),
    cpf: Number(process.argv[4])
};
const accounts = require("../contas.json");
function criarConta(contaDoUsuario) {
    let ano = anoHoje - contaDoUsuario.anoNascimento;
    if (ano < 18) {
        console.log("Você não pode criar uma conta.");
    }
    else {
        const resultadoBusca = accounts.find((account) => {
            return account.cpf === contaDoUsuario.cpf;
        });
        if (resultadoBusca === undefined) {
            try {
                accounts.push(contaDoUsuario);
                fs.writeFileSync("contas.json", JSON.stringify(accounts));
            }
            catch (error) {
                console.error(error);
            }
        }
        else {
            console.log("Usuário já cadastrado!");
        }
        console.log(resultadoBusca);
    }
}
criarConta(contaDoUsuario);
