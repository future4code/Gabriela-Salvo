function adicionaDespesa() {
   
    function adicionaDespesa (){
    const valorCadastrado = document.getElementById ("valor-cadastrado")
    const tipoDeDespesa = document.getElementById ("tipo-de-despesa")
    const descricaoDaDespesa = document.getElementById("descricao")

    if (document.getElementById("valo-cadastrado").value == "" || document.getElementById("tipo-de-despesa")) {
        console.log("Cadastre algum valor, por favor!")
    }

    valorCadastrado.value = ""
    tipoDeDespesa.value = ""
    descricaoDaDespesa = ""

    }
}
