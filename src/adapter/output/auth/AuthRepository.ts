// implemetion repository logic

import { IAuthCredentials } from "../../../application/Auth/domain/IAuthCredentials";
import { AuthRepositoryPort } from "../../../application/Auth/port/output/AuthRepositoryPort";
import { IDatabasePort } from "../../../application/common/db/output/DatabasePort";
import { IUser } from "../../../application/User/domain/IUser";

export class AuthRepository implements AuthRepositoryPort {
  constructor(private readonly db: IDatabasePort) { }
  async register(data: IAuthCredentials): Promise<IUser> {
    try {
      const pool = await this.db.db();
      const result = await pool.query(
        'INSERT INTO users (name, password) VALUES ($1, $2) RETURNING id, name, "createdAt"',
        [data.name, data.password]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Registration error:', error);
      throw new Error('Unable to register user');
    }
  }

}

