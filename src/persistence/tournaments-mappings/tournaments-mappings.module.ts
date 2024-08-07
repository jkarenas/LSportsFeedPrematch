import { Module } from '@nestjs/common';
import { TournamentsMappingsController } from './tournaments-mappings.controller';
import { TournamentsMappingsService } from './tournaments-mappings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from 'src/EntitiesFromMappings/tournament.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tournament])],
  providers: [TournamentsMappingsService],
  controllers: [TournamentsMappingsController],
  exports: [TournamentsMappingsService],
})
export class TournamentsMappingsModule {}
