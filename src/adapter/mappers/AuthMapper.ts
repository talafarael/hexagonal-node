import { IAuthCredentials } from "../../application/Auth/domain/IAuthCredentials";
import { IUser } from "../../application/User/domain/IUser";

///interfac etransform wit layer
//[Frontend Request]
//     ⬇️
//[Controller]  -->  authMapper.toDomain(raw)
//     ⬇️
//[UseCase] 
//     ⬇️
//AuthMapper.toPersistence --> [AuthRepo] --> db
//     ⬆️                       ⬇️
// transform into AuthMapper.toDto       <--- raw from DB DTO -data transfer object there we remove not avaible field fgor example   createdAt: ..., updatedAt: ... , v_:...
//     ⬆️
//res to user AuthMapper.toUI 
//     ⬆️
//[Frontend Response]
export class AuthMapper {
  static toDomain(user: IAuthCredentials): IAuthCredentials {
    return {
      name: user.name,
      password: user.password,
    }
  }

  static toPersistence(user: IAuthCredentials): IAuthCredentials {
    return {
      name: user.name,
      password: user.password,
    }
  }
  static toDto(token: string): {
    return {
  name: user.name,
  password: user.password,
  id: user.id
}
  }
}
