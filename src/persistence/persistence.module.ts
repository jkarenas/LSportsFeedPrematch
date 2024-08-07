import { Module } from '@nestjs/common';
import { SportsMappingsModule } from './sports-mappings/sports-mappings.module';
import { TournamentsMappingsModule } from './tournaments-mappings/tournaments-mappings.module';
import { MarketsMappingsModule } from './markets-mappings/markets-mappings.module';
import { OddsMappingsModule } from './odds-mappings/odds-mappings.module';
import { CategoriesMappingsModule } from './categories-mappings/categories-mappings.module';




@Module({
  imports: [SportsMappingsModule, TournamentsMappingsModule, MarketsMappingsModule, OddsMappingsModule, CategoriesMappingsModule],
  
})
export class PersistenceModule {}
