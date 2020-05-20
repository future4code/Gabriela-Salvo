import * as fs from 'fs'

const anoHoje: number = new Date().getFullYear()

type usuario = {
    name: string,
    anoNascimento: number,
    cpf: number
}

const contaDoUsuario: usuario = {
    name: String(process.argv[2]),
    anoNascimento: Number(process.argv[3]),
    cpf: Number(process.argv[4])

}

const perfilUsuario: string = "\n" + JSON.stringify(contaDoUsuario)
const fileName: string = "conta.txt"


function criarConta(contaDoUsuario: usuario): any {

    let ano = anoHoje - contaDoUsuario.anoNascimento
    if (ano < 18) {
        console.log("Você não pode criar uma conta.")
    } else {
        
        try {
            const data: Buffer = fs.readFileSync(fileName)
            const treatedData: string = data.toString()
           
           const cpfUsuario = JSON.parse(treatedData)
           cpfUsuario.find((cpfIgual:any)=>{
               
               if(cpfIgual.cpf === contaDoUsuario.cpf) {
                try {

                    fs.appendFileSync(fileName, perfilUsuario, 'utf-8');
                    console.log("Conta criada com sucesso")
                } catch (error) {
                    console.error(error)
                }
                   
                   
               }else{
                   console.log("CPF já cadastrado")
               }
           })
            

        } catch(error){
            console.error(error)

        }

     

    }
}
console.log(criarConta(contaDoUsuario))

