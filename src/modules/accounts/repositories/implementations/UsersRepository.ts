import { getRepository, Repository } from 'typeorm';

import ICreateUserDto from '../../dtos/ICreateUserDto';
import User from '../../entities/User';
import IUsersRepository from '../IUsersRepository';

export default class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDto): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }
}
