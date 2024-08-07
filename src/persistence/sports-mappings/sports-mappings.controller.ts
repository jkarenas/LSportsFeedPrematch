import { Controller, Get } from '@nestjs/common';
import { Sport } from '../../EntitiesFromMappings/sport.entity';
import { SportsMappingsService } from './sports-mappings.service';

@Controller('sports-mappings')
export class SportsMappingsController {
  constructor(private readonly sportsMappingsService: SportsMappingsService) {}

  @Get()
  async findAll(): Promise<Sport[]> {
    // console.log('Request received at /sports-mappings');
    const sports = await this.sportsMappingsService.findAll();
    // console.log('Data retrieved from service:', sports);
    return sports;

  }
}