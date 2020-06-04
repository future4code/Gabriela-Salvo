import { Commerce } from "./Commerce";
import { Client } from "./Client";

export class CommercialClient extends Commerce implements Client {
  constructor(
   public name: string,
   public registrationNumber: number,
   public consumedEnergy: number,
   private cnpj: string,
    cep: string,
    floorsQuantity: number,
  ) {
    super(floorsQuantity, cep);
  }

  public calculateBill():number {
      return this.consumedEnergy * 0.53
  }

  public getCNPJ():string {
      return this.cnpj
  }
}
