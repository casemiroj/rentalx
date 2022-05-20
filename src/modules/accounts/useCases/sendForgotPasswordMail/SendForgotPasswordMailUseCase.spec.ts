import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { UsersTokensRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory';
import { DayJsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayJsDateProvider';
import { MailProviderInMemory } from '@shared/container/providers/MailProvider/in-memory/MailProviderInMemory';
import AppError from '@shared/errors/AppError';

import { SendForgotPasswordMailUseCase } from './SendForgotPasswordMailUseCase';

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayJsDateProvider;
let mailProvider: MailProviderInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;

describe('Send Forgot Mail', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayJsDateProvider();
    mailProvider = new MailProviderInMemory();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it('should be able to send a forgot password mail to user', async () => {
    const sendMail = jest.spyOn(mailProvider, 'sendMail');

    await usersRepositoryInMemory.create({
      driver_license: '121414',
      email: 'be@tijej.st',
      name: 'Elva Jacobs',
      password: '1234',
    });

    await sendForgotPasswordMailUseCase.execute('be@tijej.st');

    expect(sendMail).toHaveBeenCalled();
  });

  it('should be able to send an email if user does not exists', async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute('de@ipo.es')
    ).rejects.toEqual(new AppError('User does not exists'));
  });

  it('should be able to create an users token', async () => {
    const generateTokenMail = jest.spyOn(
      usersTokensRepositoryInMemory,
      'create'
    );

    await usersRepositoryInMemory.create({
      driver_license: '646117',
      email: 'sagzebe@labliw.ky',
      name: 'Harold Hardy',
      password: '1234',
    });

    await sendForgotPasswordMailUseCase.execute('sagzebe@labliw.ky');

    expect(generateTokenMail).toBeCalled();
  });
});
