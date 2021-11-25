import SpecificationsRepository from '../../repositories/implementations/SpecificationsRepository';
import CreateSpecificationController from './CreateSpecificationController';
import CreateSpecificationUseCase from './CreateSpecificationUseCase';

const createSpecificationUseCase = new CreateSpecificationUseCase(
  SpecificationsRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
