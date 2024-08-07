import { Module } from '@nestjs/common';
import { CategoriesMappingsService } from './categories-mappings.service';
import { CategoriesMappingsController } from './categories-mappings.controller';

@Module({
  providers: [CategoriesMappingsService],
  controllers: [CategoriesMappingsController]
})
export class CategoriesMappingsModule {}
