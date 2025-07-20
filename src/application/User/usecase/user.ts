import { IUser } from "../domain/IUser";
import { UserPort } from "../port/input/user";




export class UserUseCase implements UserPort {
  constructor(private readonly userRepository: UserPort) { }

  public async findOneByName(name: string): Promise<IUser | undefined> {
    return await this.userRepository.findOneByName(name)
  }

}

