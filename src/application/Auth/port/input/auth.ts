import { AuthResultDto } from "../../domain/AuthResultDto";
import { IAuthCredentials } from "../../domain/IAuthCredentials";

// interface authUseCase
export interface AuthPort {
  register(data: IAuthCredentials): Promise<AuthResultDto>
  login(data: IAuthCredentials): Promise<AuthResultDto>;
}
