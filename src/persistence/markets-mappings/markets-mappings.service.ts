import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Market } from 'src/EntitiesFromMappings/market.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MarketsMappingsService {
    constructor(
        @InjectRepository(Market)
        private marketsRepository: Repository<Market>
    ){
        console.log('SportsMappingsService initialized');
    }

    async findAll(): Promise<Market[]> {
        console.log('Executing findAll method in MarketsMappingsService');
        const result = await this.marketsRepository.find();
        console.log('Data retrieved from database:', result);
        return result;
    }
}
