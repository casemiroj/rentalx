import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import UsersRepository from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';

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
    throw new AppError('Token missing!', 401);
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
      throw new AppError('User does not exist!', 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError('Invald token!', 401);
  }
}