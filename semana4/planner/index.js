//CONSTANTES GLOBAIS





function insereTarefa() {

   const input = document.getElementById("input")
   const novaTarefa =input.value
   
   const selecioneDia = document.getElementById("select")
   const diaDaSemana = selecioneDia.value
    
    const tarefas = document.querySelector("ul")
    tarefas.innerHTML += "<li>" + novaTarefa + "</li>"
    
    if (insereTarefa === " ") {
       console.log("Quero trabalhar! Digite uma tarefa")
    }else{
            switch (diaDaSemana){
                case "segunda":
                    let listaSegunda =document.getElementsById("segunda")
                    listaSegunda.innerHTML += "<li>" + novaTarefa + "</li>"
                    break;
                case "terca":
                    let listaTerca =document.getElementById("terca")
                  listaTerca.innerHTML += "<li>" + novaTarefa + "</li>"
                    break;
                case "quarta":
                    let listaQuarta =document.getElementById("quarta")
                    quarta.innerHTML += "<li>" + novaTarefa + "</li>"
                    listaQuarta.innerHTML += tarefas+ "<li>" + novaTarefa + "</li>"
                    break;
                case "quinta":
                    quinta.innerHTML += "<li>" + novaTarefa + "</li>"
                    break;
                case "sexta":
                    sexta.innerHTML += "<li>" + novaTarefa + "</li>"
                    break;
                case "sabado":
                    sabado.innerHTML += "<li>" + novaTarefa + "</li>"
                    break;
                case "domingo":
                    domingo.innerHTML += "<li>" + novaTarefa + "</li>"
                    break;
        
        
        }

    }
}






