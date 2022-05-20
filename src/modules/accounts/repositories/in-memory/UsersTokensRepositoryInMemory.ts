import { ICreateUserTokenDto } from '@modules/accounts/dtos/ICreateUserTokenDto';
import { UserTokens } from '@modules/accounts/infra/typeorm/entities/UserTokens';

import { IUsersTokensRepository } from '../IUsersTokensRepository';

export class UsersTokensRepositoryInMemory implements IUsersTokensRepository {
  usersTokens: UserTokens[] = [];

  async create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDto): Promise<UserTokens> {
    const userTokens = new UserTokens();

    Object.assign(userTokens, {
      expires_date,
      refresh_token,
      user_id,
    });

    this.usersTokens.push(userTokens);

    return userTokens;
  }

  async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
    const userToken = this.usersTokens.find(
      (userToken) => userToken.refresh_token === refresh_token
    );

    return userToken;
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens> {
    const userToken = this.usersTokens.find(
      (userToken) =>
        userToken.id === user_id && userToken.refresh_token === refresh_token
    );

    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    const userToken = this.usersTokens.find((userToken) => userToken.id === id);

    this.usersTokens.splice(this.usersTokens.indexOf(userToken));
  }
}
