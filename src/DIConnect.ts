//Di connect

import { AuthPostController } from "./adapter/input/auth/AuthPostController";
import { AuthRepository } from "./adapter/output/auth/AuthRepository";
import { UserRepository } from "./adapter/output/user/UserRepository";
import { AuthUseCase } from "./application/Auth/usecases/auth";
import { UserUseCase } from "./application/User/usecase/user";
import { RepoConncet } from "./infrastructure/db/db";
export const repo = new RepoConncet()
const userRepostory = new UserRepository(repo)
const authRepository = new AuthRepository(repo)
const userUseCase = new UserUseCase(userRepostory)
const authUseCase = new AuthUseCase(authRepository, userUseCase)


export const authController = new AuthPostController(authUseCase)
