import { inject, injectable } from 'tsyringe';

import { ICarImageRepository } from '@modules/cars/repositories/ICarImageRepository';

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
export class UploadCarImageUseCase {
  constructor(
    @inject('CarsImagesRepository')
    private carsImagesRepository: ICarImageRepository
  ) {}

  async execute({ car_id, images_name }: IRequest): Promise<void> {
    images_name.map(async (image) => {
      await this.carsImagesRepository.create(car_id, image);
    });
  }
}
