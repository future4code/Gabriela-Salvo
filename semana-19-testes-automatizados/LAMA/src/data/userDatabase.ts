import { BaseDataBase } from './baseDatabase'
import { User } from '../model/User'

export class UserDatabase extends BaseDataBase {
    protected tableName: string = "USUARIOS"

    private UserModel(databaseModelUser?: any): User | undefined {
        return (
            databaseModelUser &&
            new User(
                databaseModelUser.id,
                databaseModelUser.name,
                databaseModelUser.email,
                databaseModelUser.password,
                databaseModelUser.role
            )
        )
    }

    public async createUser(user: User): Promise<void> {
        await super.getConnection().raw(
            `
            INSERT INTO ${this.tableName} (id, name, email, password, role)
            VALUES (
                '${user.getId()}',
                '${user.getName()}',
                '${user.getEmail()}',
                '${user.getPassword()}',
                '${user.getRole()}'
                
            )`)
    }
    public async getUserByEmail(email: string): Promise<User | undefined> {
        const result = await this.getConnection().raw(
            `
            SELECT * from ${this.tableName} WHERE email = '${email}'
            
            
            `
        )
        return this.UserModel(result[0][0])
    }
    public async getAllUsers(): Promise<User[]> {
        const result = await super.getConnection().raw(`
          SELECT * from ${this.tableName}
        `);
        return result[0].map((res: any) => {
            return this.UserModel(res);
        });
    }
}
