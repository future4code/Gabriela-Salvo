import { UserDatabase } from "../data/userDatabase";
import { User, stringToUserRole } from "../model/User";
import { IdGenerator } from "../services/idGenerator";
import { HashGenerator } from "../services/HashGenerator";
import { Authenticator } from "../services/Authenticator";
import { NotFoundError } from "../error/notFoundError";

import { InvalidParameterError } from "../error/invalidParameterError";

export class BandBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private tokenGenerator: Authenticator,
    private idGenerator: IdGenerator
  ) {}