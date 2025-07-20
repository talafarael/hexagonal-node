import { IUser } from "../../domain/IUser";

export interface UserPort {
  findOneByName(name: string): Promise<IUser | undefined>
}
