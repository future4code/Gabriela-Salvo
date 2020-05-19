//exercicio 3

type  post = {
    autor:string,
    texto: any
}


const posts : post[] = [
    
    {autor: "Alexia", texto:"watering my plants in animal Crossing!"},
    {autor: "Erikinha", texto:"watering my plants in animal Crossing!"},
    {autor: "Vivi", texto:"watering my plants in animal Crossing!"}
]

function autorEscolhido (post:post[], autorEscolhido:string):post[] {
    return posts.filter((cadaPost)=>cadaPost.autor===autorEscolhido)
}

console.log(autorEscolhido(posts, "Alexia"))