function criarPostagem () {
    let autor = document.getElementById("nome-autor")
    let autorDoPost = autor.value

    let titulo= document.getElementById("titulo")
    let tituloDoPost = titulo.value

    let postagem = document.getElementById("postagem-blog")
    let postagemDoBlog = postagem.value

}

criarPostagem(){
    autorDoPost.innerHTML+="<p>"+autor + "</p>"
}
