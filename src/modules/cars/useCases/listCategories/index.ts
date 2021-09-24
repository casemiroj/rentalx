import CategoriesRepository from '../../repositories/CategoriesRepository';
import ListCategoriesController from './ListCategoriesController';
import ListCategoriesUseCase from './ListCategoriesUseCase';

const listCategoriesUseCase = new ListCategoriesUseCase(CategoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
