import { Test, TestingModule } from '@nestjs/testing';
import { OddsMappingsService } from './odds-mappings.service';

describe('OddsMappingsService', () => {
  let service: OddsMappingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OddsMappingsService],
    }).compile();

    service = module.get<OddsMappingsService>(OddsMappingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
