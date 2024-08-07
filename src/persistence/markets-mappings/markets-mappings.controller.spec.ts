import { Test, TestingModule } from '@nestjs/testing';
import { MarketsMappingsController } from './markets-mappings.controller';

describe('MarketsMappingsController', () => {
  let controller: MarketsMappingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarketsMappingsController],
    }).compile();

    controller = module.get<MarketsMappingsController>(MarketsMappingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
