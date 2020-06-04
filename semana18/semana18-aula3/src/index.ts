import { Client } from "./Client"
import { Place } from "./Place"
import { Commerce } from "./Commerce"
import { Residence } from "./Residence"
import { Industry } from "./Industry"


//1) Conseguimos acessar todas  as informações.
//2)a. Retorna o erro "Cannot create an instance of an abstract class"
//b) Só conseguiriamos se tirássemos o abstract da classe
//3)1. Apenas se deixasse de ser uma classe abstrata
//3)2. Classe abstrata é mais genérica e suas filhas sera encarregadas de seus proprios metodos.
//3)3. A interface apenas é uma assinatura de metodos onde apenas 'pegamos' o que precisamos 
//4)a. name,registrationNumber, consumedEnergy,cpf,residentsQuantity,cep. Herdadas da interface Client e classe Residence
//5)a. As duas usam a interface Client
//5)b.ResidentialCliente herda de Residence e CommercialClient herda de Commercial. As duas  herdam de Place podem usar atributos e métodos de Place

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

  console.log(client)
  console.log(client.calculateBill())

  // INSTANCIAS 

  const newResidence: Residence = new Residence(28, "28970000")
  console.log(`CEP NEWRESIDENCE => ${newResidence.getCep()}`)
  const newCommerce: Commerce = new Commerce(7, "2340000")
  console.log(`CEP NEWCOMMERCE => ${newCommerce.getCep()}`)
  const newIndustry: Industry = new Industry(6, "2897000")
  console.log(`CEP INDUSTRY => ${newIndustry.getCep()}`)
 