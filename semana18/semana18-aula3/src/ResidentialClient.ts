import { Client } from "./Client";
import { Residence } from "./Residence";

export class ResidencialClient extends Residence implements Client {
  constructor(
    name: string,
    registrationNumber: number,
    consumedEnergy: number,
    cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
      super(residentsQuantity, cep)
  }
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number {
       return this.consumedEnergy * 0.75
    }
}
