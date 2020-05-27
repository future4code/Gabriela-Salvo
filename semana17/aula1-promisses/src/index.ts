import axios from 'axios'


//a) Uso o get
//b)Promise<any[]>

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

//c)
// const main = async () => {
//     const returnAllSubscribes = await getSubscribers()
//     console.log(returnAllSubscribes)
// }

// async function getSubscribers(): Promise<any[]> {
//     const users = await axios.get(`${baseUrl}/subscribers/all`)
//     return users.data
// }

// main()

//2)

//a)função nomeada tem o nome function e arrow nao possui e nao é nomeada
//b)
// const main = async () => {
//     const returnAllSubscribes = await getSubscribers()
//     console.log(returnAllSubscribes)
// }

// const getSubscribers = async (): Promise<any[]> => {
//     const users = await axios.get(`${baseUrl}/subscribers/all`)
//     return users.data
// }

// main()

//3)
//a) O retorno dará erro de tipagem pois o type já possui seus próprios parâmetros
//b) usamos a Promise<any> porque não sabemos exatamente o que retornará da API
type User = {
	id: string;
	name: string;
	email: string;
}


const getSubscribers = async (): Promise<User[]> => {
    const users = await axios.get (`${baseUrl}/subscribers/all`)
    return users.data.map((response:any)=>{
        return {
            id:response.id,
            name:response.name,
            email:response.email
        }
    })

}

const main = async () => {
    const returnAllSubscribes = await getSubscribers()
    console.log(returnAllSubscribes)
}
main()