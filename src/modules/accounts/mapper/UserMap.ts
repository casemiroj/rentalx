import { instanceToInstance } from 'class-transformer';

import { IUserResponseDTO } from '../dtos/IUserResponseDto';
import User from '../infra/typeorm/entities/User';

export class UserMap {
  static toDTO({
    email,
    name,
    id,
    driver_license,
    avatar,
    avatar_url,
  }: User): IUserResponseDTO {
    const user = instanceToInstance({
      email,
      name,
      id,
      driver_license,
      avatar,
      avatar_url,
    });

    return user;
  }
}
