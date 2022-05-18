import { ICreateUserTokenDto } from '../dtos/ICreateUserTokenDto';
import { UserTokens } from '../infra/typeorm/entities/UserTokens';

export interface IUsersTokensRepository {
  create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDto): Promise<UserTokens>;
}
