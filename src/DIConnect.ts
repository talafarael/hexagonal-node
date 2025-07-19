//Di connect

import { AuthPostController } from "./adapter/primary/auth/AuthPostController";
import { AuthRepository } from "./adapter/secondary/auth/AuthRepository";
import { AuthUseCase } from "./application/Auth/usecases/auth";
import { RepoConncet } from "./infrastructure/db/db";
export const repo = new RepoConncet()

const authRepository = new AuthRepository(repo)
const authUseCase = new AuthUseCase(authRepository)

export const authController = new AuthPostController(authUseCase)
