import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Odd } from 'src/EntitiesFromMappings/odd.entity';
import { Repository } from 'typeorm';


@Injectable()
export class OddsMappingsService {

    constructor(
        @InjectRepository(Odd)
        private OddsRepository: Repository<Odd>
    ){
        console.log('OddsMappingServiceInitialized') 
    }

    async findAll(): Promise<Odd[]>{
        console.log('Executing findAll method in SportsMappingsService');
        const result = await this.OddsRepository.find()
        console.log('Data retrieved from database:', result);
        return result;
    }
}
