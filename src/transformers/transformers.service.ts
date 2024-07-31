import { Injectable } from '@nestjs/common';
import { LSportsDto } from '../DTOS/lsportsDTO';
import { InbbetsDto } from '../DTOS/inbbetsDTOS';

@Injectable()

export class TransformersService {
    transformLSportsToInbbets(lsportsData: LSportsDto): InbbetsDto {

        const inbbetsData: InbbetsDto = {
            // timestamp: {
            //     createdTime: new Date().toISOString(),
            //     timeZone: 'UTC'
            // },
            sports: lsportsData.Body.map((body) => {
                const fixture = body.Fixture;
                
                return {
                betradarSportId: fixture.Sport.Id,
                texts: [
                    {
                        language: 'en',
                        value: fixture.Sport.Name
                    }
                ],
                categories: [
                    {
                        betradarCategoryId: fixture.Location.Id,
                        text: [
                            {
                                language: 'en',
                                value: fixture.Location.Name
                            }
                        ],
                        tournaments: [
                            {
                                betradarTournamentID: fixture.League.Id,
                                uofTournamentID: fixture.League.Id,
                                texts: [
                                    {
                                        language: 'en',
                                        value: fixture.League.Name
                                    }
                                ],
                                matches: [
                                    {
                                        betradarMatchId: parseInt(fixture.ExternalFixtureId),
                                        fixture: {
                                            competitors: {
                                                texts:fixture.Participants.map((participant)=>({
                                                    id:participant.Id,
                                                    superId:participant.Id,
                                                    texts: [{
                                                        language: 'en',
                                                        value: participant.Name
                                                    }] 
                                                    
                                                })),
                                                              
                                                
                                            },
                                            dateInfo: {
                                                matchDate: fixture.StartDate
                                            },
                //                             // statusInfo: {
                //                             //     off: 0
                //                             // },
                //                             // aamS_CalendarID:
                //                             // neutralGround: 
                //                             // roundInfo:
                                            venueInfo:{
                                                country:fixture.Location.Name
                                            }
                                        },
                                        matchOdds:{
                                            
                                            bets:body.Markets.map((market)=>({
                                                oddsType:market.Id.toString(),

                                                oddses:market.Bets.map((bet) => ({
                                                            outcome:bet.Name,
                                                            value:parseFloat(bet.StartPrice)
                                                }))
                                            }))
                                        },
                                    }
                                ]
                            }
                        ],
                    }
                ]
                }
            })
        }
        return inbbetsData
    }
}



