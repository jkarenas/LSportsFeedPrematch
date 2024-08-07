import { Test, TestingModule } from '@nestjs/testing';
import { OddsMappingsController } from './odds-mappings.controller';

describe('OddsMappingsController', () => {
  let controller: OddsMappingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OddsMappingsController],
    }).compile();

    controller = module.get<OddsMappingsController>(OddsMappingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
