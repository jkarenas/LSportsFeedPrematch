import { Injectable } from '@nestjs/common';
import { LSportsDto } from '../DTOS/lsportsDTO';
import { InbbetsDto } from '../DTOS/inbbetsDTOS';
import { SportsMappingsService } from '../persistence/sports-mappings/sports-mappings.service';
import { TournamentsMappingsService } from 'src/persistence/tournaments-mappings/tournaments-mappings.service';
import axios from 'axios';
import { MarketsMappingsService } from 'src/persistence/markets-mappings/markets-mappings.service';
import { OddsMappingsService } from 'src/persistence/odds-mappings/odds-mappings.service';

@Injectable()
export class TransformersService {
  private idSportsMappings: Map<number, number> = new Map();
  private nameSportsMappings: Map<string, string> = new Map();

  private idTournamentMappings: Map<number, number> = new Map();
  private nameTournamentsMappings: Map<string, string> = new Map();
  private uofTournamentsMappings: Map<number, number> = new Map();

  private idMarketsMappings: Map<number, number> = new Map();

  private nameOddsMappings: Map<string, string> = new Map();

  constructor(
    private readonly sportsMappingsService: SportsMappingsService,
    private readonly tournamentsMappingsService: TournamentsMappingsService,
    private readonly marketsMappingsService: MarketsMappingsService,
    private readonly oddsMappingsService: OddsMappingsService,
  ) {
    this.loadMappings();
  }

  private async loadMappings() {
    const sportmappings = await this.sportsMappingsService.findAll();
    this.idSportsMappings = new Map(sportmappings.map(mapping => [mapping.LSportsSportId, mapping.betradarSportId]));
    this.nameSportsMappings = new Map(sportmappings.map(mapping => [mapping.LSportsSportName, mapping.InbbetsSportName]));

    const tournametMappings = await this.tournamentsMappingsService.findAll();
    this.idTournamentMappings = new Map(tournametMappings.map(mapping => [mapping.LsportsLeagueId, mapping.betradarTournamentID]));
    this.nameTournamentsMappings = new Map(tournametMappings.map(mapping => [mapping.LsportsLeagueName, mapping.InnbetsTournamentName]));
    this.uofTournamentsMappings = new Map(tournametMappings.map(mapping => [mapping.LsportsLeagueId, mapping.uofTournamentID]));

    const marketMappings = await this.marketsMappingsService.findAll();
    this.idMarketsMappings = new Map(marketMappings.map(mapping => [mapping.LsportMarketId, mapping.InbbetsOddsTypeMarketId]));

    const oddMappings = await this.oddsMappingsService.findAll();
    this.nameOddsMappings = new Map(oddMappings.map(mapping => [mapping.LsportsBetName, mapping.InbbbetsOutcomeName]));
  }

  async fetchDataFromEndpoint(): Promise<LSportsDto> {
    const response = await axios.post('https://stm-snapshot.lsports.eu/PreMatch/GetEvents', {
      PackageId: 2184,
      UserName: 'a.quemba@elysgame.com',
      Password: 'Adj38@f3R2'
    });
    return response.data;
  }

  transformLSportsToInbbets(lsportsData: LSportsDto): InbbetsDto {
    const inbbetsData: InbbetsDto = {
      sports: lsportsData.Body.map((body) => {
        const fixture = body.Fixture;
        const betradarSportId = this.idSportsMappings.get(fixture.Sport.Id) || null;
        const betradarSportName = this.nameSportsMappings.get(fixture.Sport.Name) || null;

        const betradarTournamentId = this.idTournamentMappings.get(fixture.League.Id) || fixture.League.Id;
        const betradarTournamentName = this.nameTournamentsMappings.get(fixture.League.Name) || fixture.League.Name;
        const oufTournamentId = this.uofTournamentsMappings.get(fixture.League.Id) || fixture.League.Id;

        const markets = body.Markets ? body.Markets.map((market) => {
          const oddsTypeId = this.idMarketsMappings.get(market.Id) || market.Id;
          if (!oddsTypeId) return null; 
          
          const bets = market.Bets.map((bet) => {
            const outcomeName = this.nameOddsMappings.get(bet.Name) || bet.Name;
            return {
              outcome: outcomeName,
              value: parseFloat(bet.StartPrice),
            };
          });

          return {
            oddsTypeId,
            bets,
          };
        }).filter(market => market !== null) : []; 

        return {
          betradarSportId: betradarSportId,
          texts: [
            {
              language: 'en',
              value: betradarSportName,
            },
          ],
          categories: [
            {
              betradarCategoryId: fixture.Location.Id,
              text: [
                {
                  language: 'en',
                  value: fixture.Location.Name,
                },
              ],
              tournaments: [
                {
                  betradarTournamentID: betradarTournamentId,
                  uofTournamentID: oufTournamentId,
                  texts: [
                    {
                      language: 'en',
                      value: betradarTournamentName,
                    },
                  ],
                  matches: [
                    {
                      betradarMatchId: body.FixtureId,
                      fixture: {
                        competitors: {
                          texts: fixture.Participants.map((participant) => ({
                            id: participant.Id,
                            superId: participant.Id,
                            texts: [{
                              language: 'en',
                              value: participant.Name,
                            }],
                          })),
                        },
                        dateInfo: {
                          matchDate: fixture.StartDate,
                        },
                        venueInfo: {
                          country: fixture.Location.Name,
                        },
                      },
                      matchOdds: {
                        bets: markets.map((market) => ({
                          oddsType: market.oddsTypeId ? market.oddsTypeId.toString() : null,
                          oddses: market.bets,
                        })),
                      },
                    },
                  ],
                },
              ],
            },
          ],
        };
      }),
    };
    return inbbetsData;
  }
}
