import { Controller, Get } from '@nestjs/common';
import { TournamentsMappingsService } from './tournaments-mappings.service';
import { Tournament } from 'src/EntitiesFromMappings/tournament.entity';

@Controller('tournaments-mappings')
export class TournamentsMappingsController {
    constructor(private readonly tournamentsMappingsService: TournamentsMappingsService){}

        @Get()
        async findAll(): Promise<Tournament[]>{
            const tournaments = await this.tournamentsMappingsService.findAll();
            return tournaments;
        
    }
}
