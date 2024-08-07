import { Module } from '@nestjs/common';
import { SportsMappingsService } from './sports-mappings.service';
import { SportsMappingsController } from './sports-mappings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sport } from '../../EntitiesFromMappings/sport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sport])],
  providers: [SportsMappingsService],
  controllers: [SportsMappingsController],
  exports: [SportsMappingsService],
})
export class SportsMappingsModule {}
