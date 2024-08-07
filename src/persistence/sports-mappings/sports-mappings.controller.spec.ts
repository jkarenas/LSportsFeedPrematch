import { Test, TestingModule } from '@nestjs/testing';
import { SportsMappingsController } from './sports-mappings.controller';

describe('SportsMappingsController', () => {
  let controller: SportsMappingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportsMappingsController],
    }).compile();

    controller = module.get<SportsMappingsController>(SportsMappingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
