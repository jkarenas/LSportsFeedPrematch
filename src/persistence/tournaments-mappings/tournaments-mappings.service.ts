import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tournament } from 'src/EntitiesFromMappings/tournament.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TournamentsMappingsService {

    constructor(
        @InjectRepository(Tournament)
        private TournamentsRepository: Repository<Tournament>
    ){
        console.log('TournamentsMappingServiceInitialized')
    }

    async findAll(): Promise<Tournament[]>{
        console.log('Executing findAll method in SportsMappingsService');
        const result = await this.TournamentsRepository.find();
        console.log('Data retrieved from database:', result);
        return result;
    }
}
