//interface of authRepo

import { IUser } from "../../../User/domain/IUser";
import { IAuthCredentials } from "../../domain/IAuthCredentials";

export interface AuthRepositoryPort {
  register(data: IAuthCredentials): Promise<IUser>
}
