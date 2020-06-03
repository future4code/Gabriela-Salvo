//1)a.Não porque ela está como private, o que impossibilidade que mexemos nela fora da sua propria classe.
//b. Foi impresso apenas uma vez.

import { User } from "./User";
import { Customer } from "./Customer";
import { Employee } from "./Employee";
import { Seller } from "./Seller";

const newUser: User = new User(
  "055",
  "gabizinha@gabi.com",
  "Gabriela Salvo",
  "abacatinho"
);
console.log(newUser.getId());
console.log(newUser.getEmail());
console.log(newUser.getName());

//2)
//a.Customer 1 vez só  pois só a instânciamos uma vez.
//b.Irá chamar duas vezes porque pois a Customer é uma subclasse.

const newCostumer: Customer = new Customer(
  "333",
  "ivana@ivana.com",
  "Ivana",
  "123",
  "master"
);
console.log(newCostumer);
//3)a. Nao poderíamos imprimir password, pois password nos é passado por herança da sua classe User como private
//4)a. 5)
console.log(newCostumer.introduceYourself());

//6)a. Impresso 3 vezes no terminal
//b)Apenas
const newEmployee: Employee = new Employee(
  "123",
  "erikota@erika.com",
  "Erika",
  "123",
  new Date("10/10/10"),
  7000
);
console.log(newEmployee);
//7)

console.log("🐶", newEmployee.calculateTotalSalary());
//)

const storeSeller: Seller = new Seller(
  "34",
  "joao@bike.com",
  "Joao",
  "bicicleta",
  new Date("10/10/10"),
  7400
);
//8) a. Ela herda todos os parâmetros da classe Pai, não precisamos setá-las se não quisermos.
//b. Consegui imprimir todas pois são todas herdadas.

console.log(`Calculo do salário => ${storeSeller.calculateTotalSalary()}`);
console.log(`Data da admissão => ${storeSeller.getAdmissionDate()}`);
console.log(`Salário base => ${storeSeller.getBaseSalary()}`);
console.log(`email de contato => ${storeSeller.getEmail()}`);
console.log(`Identificação => ${storeSeller.getId()}`);
console.log(`Nome do funcionário => ${storeSeller.getName()}`);

//9)

// storeSeller.getSalesQuantity()
storeSeller.setSalesQuantity(5000)
console.log(`🐕 GET Quantidade de vendas => ${storeSeller.getSalesQuantity()}`);

//10)
console.log(`OVERRIDE ${storeSeller.calculateTotalSalary()}`)
