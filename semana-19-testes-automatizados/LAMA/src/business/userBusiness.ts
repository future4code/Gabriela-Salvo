import { UserDatabase } from "../data/userDatabase";
import { User, stringToUserRole } from "../model/User";
import { IdGenerator } from "../services/idGenerator";
import { HashGenerator } from "../services/HashGenerator";
import { Authenticator } from "../services/Authenticator";
import { NotFoundError } from "../error/notFoundError";

import { InvalidParameterError } from "../error/invalidParameterError";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private hashGenerator: HashGenerator,
    private tokenGenerator: Authenticator,
    private idGenerator: IdGenerator
  ) {}

  public async signup(
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    if (!name || !email || !password) {
      throw new InvalidParameterError("Missing input");
    }

    if (email.indexOf("@") === -1) {
      throw new InvalidParameterError("Invalid email");
    }

    if (password.length < 6) {
      throw new InvalidParameterError("Invalid password");
    }

    const id = this.idGenerator.generate();
    const cryptedPassword = await this.hashGenerator.hash(password);

    await this.userDatabase.createUser(
      new User(id, name, email, cryptedPassword, stringToUserRole(role))
    );

    const accessToken = this.tokenGenerator.generate({
      id,
      role,
    });
    return { accessToken };
  }

  //   public async getUserById(id: string) {
  //     const user = await this.userDatabase.getUserById(id);

  //     if (!user) {
  //       throw new NotFoundError("User not found");
  //     }

  //     return {
  //       id: user.getId(),
  //       name: user.getName(),
  //       email: user.getEmail(),
  //       role: user.getRole(),
  //     };
  //   }

  public async login(email: string, password: string) {
    if (!email || !password) {
      throw new InvalidParameterError("Missing input");
    }

    const user = await this.userDatabase.getUserByEmail(email);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const isPasswordCorrect = await this.hashGenerator.compareHash(
      password,
      user.getPassword()
    );

    if (!isPasswordCorrect) {
      throw new InvalidParameterError("Invalid password");
    }

    const accessToken = this.tokenGenerator.generate({
      id: user.getId(),
      role: user.getRole(),
    });

    return { accessToken };
  }
}
