import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesMappingsService } from './categories-mappings.service';

describe('CategoriesMappingsService', () => {
  let service: CategoriesMappingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesMappingsService],
    }).compile();

    service = module.get<CategoriesMappingsService>(CategoriesMappingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
