import { Test, TestingModule } from '@nestjs/testing';
import { MarketsMappingsService } from './markets-mappings.service';

describe('MarketsMappingsService', () => {
  let service: MarketsMappingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarketsMappingsService],
    }).compile();

    service = module.get<MarketsMappingsService>(MarketsMappingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
