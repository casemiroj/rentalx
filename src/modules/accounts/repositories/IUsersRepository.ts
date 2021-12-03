import ICreateUserDTO from '../dtos/ICreateUserDto';

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}
