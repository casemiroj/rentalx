import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Car description',
      daily_rate: 110,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Car brand',
      category_id: 'Category id',
    });
    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car2',
      description: 'Car description',
      daily_rate: 110,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Car brand test',
      category_id: 'Category id',
    });
    const cars = await listCarsUseCase.execute({
      brand: 'Car brand test',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car name test',
      description: 'Car description',
      daily_rate: 110,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Car brand',
      category_id: 'Category id',
    });
    const cars = await listCarsUseCase.execute({
      name: 'Car name test',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car name',
      description: 'Car description',
      daily_rate: 110,
      license_plate: 'DEF-12345',
      fine_amount: 40,
      brand: 'Car brand',
      category_id: 'Category id test',
    });
    const cars = await listCarsUseCase.execute({
      category_id: 'Category id test',
    });

    expect(cars).toEqual([car]);
  });
});
