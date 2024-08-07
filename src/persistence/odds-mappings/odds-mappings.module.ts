import { Module } from '@nestjs/common';
import { OddsMappingsController } from './odds-mappings.controller';
import { OddsMappingsService } from './odds-mappings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Odd } from 'src/EntitiesFromMappings/odd.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Odd])],
  controllers: [OddsMappingsController],
  providers: [OddsMappingsService],
  exports: [OddsMappingsService]
})

export class OddsMappingsModule {}
