import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesMappingsController } from './categories-mappings.controller';

describe('CategoriesMappingsController', () => {
  let controller: CategoriesMappingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesMappingsController],
    }).compile();

    controller = module.get<CategoriesMappingsController>(CategoriesMappingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
