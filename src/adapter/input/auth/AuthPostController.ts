// in this controller we use use case and  get request from http

import { IAuthCredentials } from "../../../application/Auth/domain/IAuthCredentials";
import { AuthPort } from "../../../application/Auth/port/input/auth";
import { UnCaughtError } from "../../../error/Uncaught";
import { AuthMapper } from "../../mappers/AuthMapper";


// use useCase there by interface
export class AuthPostController {
  constructor(
    // auth case
    private readonly authCase: AuthPort
  ) { }
  async register(name: string, password: string) {
    try {
      const data = AuthMapper.toDomain({
        name,
        password
      })
      const res = await this.authCase.register(data)
      return res
    } catch (e) {
      console.log(e)
      if (e instanceof Error) {
        throw new UnCaughtError(e.message)
      }
      if (typeof e === 'object' && e !== null && 'message' in e && 'status' in e) {
        const err = e as { message: string; status: number };
        throw new UnCaughtError(err.message, err.status);
      }
      throw new UnCaughtError('Unknown error');
    }
  }
  async login(name: string, password: string) {
    try {
      const data = AuthMapper.toDomain({
        name,
        password
      })
      const res = await this.authCase.login(data)
      return res
    } catch (e) {
      console.log(e)
      if (e instanceof Error) {
        throw new UnCaughtError(e.message)
      }
      if (typeof e === 'object' && e !== null && 'message' in e && 'status' in e) {
        const err = e as { message: string; status: number };
        throw new UnCaughtError(err.message, err.status);
      }
      throw new UnCaughtError('Unknown error');
    }
  }
}
