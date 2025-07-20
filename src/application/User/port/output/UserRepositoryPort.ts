import { IUser } from "../../domain/IUser";

export interface UserRepositoryPort {
  findOneByName(name: string): Promise<IUser | undefined>
}
