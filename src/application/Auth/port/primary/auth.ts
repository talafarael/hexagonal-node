import { IAuthCredentials } from "../../domain/IAuthCredentials";

// interface authUseCase
export interface AuthPort {
  login(data: IAuthCredentials): Promise<string>;
}
