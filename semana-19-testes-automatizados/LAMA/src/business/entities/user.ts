export class User {
  constructor(
    private id: string,
    private name: string,
    private password: string,
    private email: string,
    private role: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getRole(): string {
    return this.role;
  }

  public getPassword(): string {
    return this.role;
  }
}
