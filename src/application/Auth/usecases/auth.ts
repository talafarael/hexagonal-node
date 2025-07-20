//AuthUseCase

import { AuthMapper } from "../../../adapter/mappers/AuthMapper";
import { AuthRepository } from "../../../adapter/output/auth/AuthRepository";
import { UnCaughtError } from "../../../error/Uncaught";
import { generateToken } from "../../helpers/jwt_utils";
import { comparePassword, hashPassword } from "../../helpers/password_utils";
import { UserUseCase } from "../../User/usecase/user";
import { AuthResultDto } from "../domain/AuthResultDto";
import { IAuthCredentials } from "../domain/IAuthCredentials";
import { AuthPort } from "../port/input/auth";

export class AuthUseCase implements AuthPort {
  hashPassword
  generateToken
  comparePassword

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userUseCase: UserUseCase
  ) {
    this.hashPassword = hashPassword
    this.generateToken = generateToken
    this.comparePassword = comparePassword
  }
  async register(data: IAuthCredentials): Promise<AuthResultDto> {
    const hashPass = await this.hashPassword(data.password)
    const persistenceData = AuthMapper.toPersistence({
      name: data.name,
      password: hashPass
    })
    const res = await this.authRepository.register(persistenceData)
    const token = await this.generateToken({ id: res.id })
    const resToken = AuthMapper.toDto(token)
    return resToken
  }
  async login(data: IAuthCredentials): Promise<AuthResultDto> {
    const user = await this.userUseCase.findOneByName(data.name);
    if (!user) {
      throw new UnCaughtError('User not found', 404);
    }
    const isValidPassword = await this.comparePassword(data.password, user.password);
    if (!isValidPassword) {
      throw new UnCaughtError('Invalid password', 401);
    }

    const token = await this.generateToken({ id: user.id });
    const resToken = AuthMapper.toDto(token)
    return resToken
  }

}
