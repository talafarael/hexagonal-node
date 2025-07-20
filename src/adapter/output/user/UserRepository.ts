import { IDatabasePort } from "../../../application/common/db/output/DatabasePort";
import { IUser } from "../../../application/User/domain/IUser";
import { UserRepositoryPort } from "../../../application/User/port/output/UserRepositoryPort";
import { UnCaughtError } from "../../../error/Uncaught";

export class UserRepository implements UserRepositoryPort {
  constructor(private readonly db: IDatabasePort) { }
  async findOneByName(name: string): Promise<IUser | undefined> {
    try {
      const pool = await this.db.db();
      const result = await pool.query("SELECT * FROM users WHERE name = $1 LIMIT 1", [name])
      return result.rows[0];
    } catch (error) {
      console.error('Registration error:', error);
      throw new UnCaughtError('Unable to find user', 500);
    }
  }
}
