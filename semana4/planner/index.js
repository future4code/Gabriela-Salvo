//CONSTANTES GLOBAIS





function insereTarefa() {

   const input = document.getElementById("input")
   const novaTarefa =(input).value
   
   const selecioneDia = document.getElementById("select")
   const diaDaSemana = selecioneDia.value
    
    const tarefas = document.querySelector("ul")
    tarefas.innerHTML += "<li>" + novaTarefa + "</li>"
    
    if (insereTarefa === " ") {
       console.log("Quero trabalhar! Digite uma tarefa")
    }else{
            switch (diaDaSemana){
                case "Segunda":
                    let listaDeTarefasSegunda =document.getElementsByTagName("segundaFeira")
                    listaDeTarefasSegunda.innerHTML += "<li>" + novaTarefa + "</li>"
                    break;
                case "Terca":
                    let listaDeTarefasTerca =document.getElementById("tercaFeira")
                  listaDeTarefasTerca.innerHTML += "<li>" + novaTarefa + "</li>"
                    break;
                case "Quarta":
                    let listaDeTarefasQuarta =document.getElementById("quartaFeira")
                    quarta.innerHTML += "<li>" + novaTarefa + "</li>"
                    listaDeTarefasQuarta.innerHTML += tarefas+ "<li>" + novaTarefa + "</li>"
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






