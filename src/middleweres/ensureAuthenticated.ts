import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import UsersRepository from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}
export default async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token missing!');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      '3bbd635582ef243fb964407e6c66a480'
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(user_id);

    if (!user) {
      throw new Error('User does not exist!');
    }

    next();
  } catch {
    throw new Error('Invald token!');
  }
}
