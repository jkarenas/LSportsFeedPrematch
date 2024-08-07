import { Test, TestingModule } from '@nestjs/testing';
import { TournamentsMappingsController } from './tournaments-mappings.controller';

describe('TournamentsMappingsController', () => {
  let controller: TournamentsMappingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TournamentsMappingsController],
    }).compile();

    controller = module.get<TournamentsMappingsController>(TournamentsMappingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
