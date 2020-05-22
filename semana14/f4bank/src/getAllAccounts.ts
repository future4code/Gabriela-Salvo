import * as fs from 'fs'
import { contas } from './index'


function getAllAccounts(contas:string): void {

    try {
        const data: Buffer = fs.readFileSync(contas)
        const treatedData: string = data.toString()
        const doc: any = JSON.parse(treatedData)
        console.log(JSON.stringify(doc, null, 3))
    }catch(error) {
        console.log(error)
    }
}

console.log(getAllAccounts(contas))