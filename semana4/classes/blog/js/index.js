function criarPostagem() {
    let autor = document.getElementById("nome-autor")


    let titulo = document.getElementById("titulo")


    let postagem = document.getElementById("postagem-blog")

    let buttonPost = document.getElementById("enviar-post")

    let postagemBlog = document.getElementById("postagem")


    let objetoBlog = new postBlog(autor.value, titulo.value, postagem.value)

    postagemBlog.innerHTML += "<div>" + objetoBlog.autor + "</div>"
    postagemBlog.innerHTML += "<div>" + objetoBlog.titulo + "</div>"
    postagemBlog.innerHTML += "<div>" + objetoBlog.postagem + "</div>"

    let meuArray =[objetoBlog.autor, objetoBlog.titulo, objetoBlog.postagem]
    console.log(meuArray[0])
    console.log(meuArray[1])
    console.log(meuArray[2])

    autor.value =""
    titulo.value = ""
    postagem.value=""
    
}

class postBlog {
    constructor(autor, titulo, postagem) {
        this.autor = autor
        this.titulo = titulo
        this.postagem = postagem
    }

}



