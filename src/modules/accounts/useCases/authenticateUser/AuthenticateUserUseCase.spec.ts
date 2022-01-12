import AppError from '../../../../errors/AppError';
import ICreateUserDto from '../../dtos/ICreateUserDto';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import CreateUserUseCase from '../createUser/CreateUserUseCase';
import AuthenticateUserUseCase from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDto = {
      driver_license: '00123',
      email: 'user@test.com',
      password: '1234',
      name: 'user test',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate a non-existing user', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'false@email.com',
        password: '8465464',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate if a incorrect password', () => {
    expect(async () => {
      const user: ICreateUserDto = {
        driver_license: '00456',
        email: 'user123@test.com',
        password: '1234',
        name: 'user test 123',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: '2525',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
