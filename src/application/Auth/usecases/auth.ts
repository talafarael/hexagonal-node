//AuthUseCase

import { AuthMapper } from "../../../adapter/mappers/AuthMapper";
import { AuthRepository } from "../../../adapter/secondary/auth/AuthRepository";
import { generateToken } from "../../helpers/jwt_utils";
import { comparePassword, hashPassword } from "../../helpers/password_utils";
import { IAuthCredentials } from "../domain/IAuthCredentials"; import { AuthPort } from "../port/primary/auth";


export class AuthUseCase implements AuthPort {
  hashPassword
  generateToken
  constructor(private readonly authRepository: AuthRepository) {
    this.hashPassword = hashPassword
    this.generateToken = generateToken
  }
  async register(data: IAuthCredentials) {
    const hashPass = await this.hashPassword(data.password)
    //if(!hashPass)
    const persistenceData = AuthMapper.toPersistence({
      name: data.name,
      password: hashPass
    })
    const res = await this.authRepository.register(persistenceData)
    const token = await this.generateToken({ id: res.id })
    return ""
  }
  async login(data: IAuthCredentials) {
    return ""
  }

}
