import { Controller, Get } from '@nestjs/common';
import { MarketsMappingsService } from './markets-mappings.service';
import { Market } from 'src/EntitiesFromMappings/market.entity';

@Controller('markets-mappings')
export class MarketsMappingsController {
    constructor(private readonly marketsMappingsService: MarketsMappingsService) {}

    @Get()
    async findAll(): Promise<Market[]> {
      console.log('Request received at /markets-mappings');
      const markets= await this.marketsMappingsService.findAll();
      console.log('Data retrieved from service:', markets);
      return markets;
  
    }
}
