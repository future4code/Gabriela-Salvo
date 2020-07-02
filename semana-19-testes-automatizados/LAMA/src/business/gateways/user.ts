import { User } from "../entities/user";

export interface UserGateway {
  createUser(user: User): Promise<void>;
  getUserById(id: string): Promise<User | undefined>;
  getUserByName(name: string): Promise<User | undefined>;
}
