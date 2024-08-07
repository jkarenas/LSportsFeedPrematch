import { Module } from '@nestjs/common';
import { MarketsMappingsController } from './markets-mappings.controller';
import { MarketsMappingsService } from './markets-mappings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Market} from '../../EntitiesFromMappings/market.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Market])],
  controllers: [MarketsMappingsController],
  providers: [MarketsMappingsService],
  exports: [MarketsMappingsService]
})
export class MarketsMappingsModule {}
