export abstract class Place {
  constructor(protected cep: string) {}

  public getCep(): string {
    return this.cep;
  }
}

// const home: Place = new Place("28880000");
