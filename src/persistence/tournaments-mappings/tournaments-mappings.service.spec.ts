import { Test, TestingModule } from '@nestjs/testing';
import { TournamentsMappingsService } from './tournaments-mappings.service';

describe('TournamentsMappingsService', () => {
  let service: TournamentsMappingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TournamentsMappingsService],
    }).compile();

    service = module.get<TournamentsMappingsService>(TournamentsMappingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
