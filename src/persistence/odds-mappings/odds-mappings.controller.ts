import { Controller,Get } from '@nestjs/common';
import { OddsMappingsService } from './odds-mappings.service';
import { Odd } from 'src/EntitiesFromMappings/odd.entity';

@Controller('odds-mappings')
export class OddsMappingsController {
    constructor(private readonly oddsMappingsService: OddsMappingsService) {}

        @Get()
        async findAll(): Promise<Odd[]>{
            const odds = await this.oddsMappingsService.findAll();
            return odds;
        
    }
}
