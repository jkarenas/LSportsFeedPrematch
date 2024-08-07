import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Sport} from '../../EntitiesFromMappings/sport.entity'

@Injectable()
export class SportsMappingsService {

    constructor(
        @InjectRepository(Sport)
        private sportsRepository: Repository<Sport>
    ){
        console.log('SportsMappingsService initialized');
    }

    async findAll(): Promise<Sport[]> {
        console.log('Executing findAll method in SportsMappingsService');
        const result = await this.sportsRepository.find();
        console.log('Data retrieved from database:', result);
        return result;
    }

}
