import { Module } from '@nestjs/common';
import { TransformersService } from './transformers.service';
import { TransformersController } from './transformers.controller';
import { SportsMappingsModule } from 'src/persistence/sports-mappings/sports-mappings.module';
import { TournamentsMappingsModule } from 'src/persistence/tournaments-mappings/tournaments-mappings.module';
import { MarketsMappingsModule } from 'src/persistence/markets-mappings/markets-mappings.module';
import { OddsMappingsModule } from 'src/persistence/odds-mappings/odds-mappings.module';

@Module({
  imports: [SportsMappingsModule, TournamentsMappingsModule, MarketsMappingsModule, OddsMappingsModule],
  controllers: [TransformersController],
  providers: [TransformersService],
})
export class TransformersModule {}
