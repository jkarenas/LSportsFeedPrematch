import { Test, TestingModule } from '@nestjs/testing';
import { SportsMappingsService } from './sports-mappings.service';

describe('SportsMappingsService', () => {
  let service: SportsMappingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SportsMappingsService],
    }).compile();

    service = module.get<SportsMappingsService>(SportsMappingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
