import { isArray, IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';


export class InbbetsDto {
    //   @ValidateNested()
    //   @Type(() => InbbetsTimestampDto)
    //   timestamp: InbbetsTimestampDto;
    
      @IsArray()
    //   @ValidateNested({ each: true })
      @Type(() => InbbetsSportDto)
      sports: InbbetsSportDto[];
    }
    
//timestamp    
    class InbbetsTimestampDto {
        @IsString()
        createdTime: string;
        
        @IsString()
        timeZone: string;
        }

//sports        
class InbbetsSportDto {
    @IsString()
    betradarSportId: Number;
  
    @IsArray()
    @Type(()=> InbbetsTextsDto)
    texts: InbbetsTextsDto[];
  
    @IsArray()
    @Type(() => InbbetsCategoryDto)
    categories: InbbetsCategoryDto[];
  }


  
// texts
class InbbetsTextsDto {
  @IsString()
  language: string;

  @IsString()
  value: string;
}




//categories
class InbbetsCategoryDto {
    @IsNumber()
    betradarCategoryId: Number;
  
    @IsArray()
    @Type(()=> CategoriesTextDto)
    text: CategoriesTextDto[];
  
    @IsArray()
    @Type(() => InbbetsTournamentDto)
    tournaments: InbbetsTournamentDto[];
  
  }

//tests de categorias
  class CategoriesTextDto {
    @IsString()
    language: string;
  
    @IsString()
    value: string;
  }

  //tournaments
class InbbetsTournamentDto {
  @IsNumber()
  betradarTournamentID: number;

  @IsString()
  uofTournamentID: number;

  @IsArray()
  @Type(() => TournamentTextDto)
  texts: TournamentTextDto[];

  @IsArray()
  @Type(() => InbbetsMatchDto)
  matches: InbbetsMatchDto[];
}
//text tournaments
class TournamentTextDto {
    @IsString()
    language: string;
  
    @IsString()
    value: string;
}

class OddsesDto {
  @IsString()
  outcome: string

  @IsNumber()
  value: number
}

class BetsDto {
  @IsString()
  oddsType: string

  @IsArray()
  oddses: OddsesDto[]
}




class MatchOddsDto {
  @IsArray()
  bets:BetsDto[]
}

class CompetitorsDto {

    // @IsArray()
    // @Type(()=>textsCompetitorDto) 
    // texts : textsCompetitorDto[]
}

class dateInfoDto {

    @IsString()
    matchDate:string
}
class VenueInfoDto{

  @IsString()
  country: string
}

class FixtureDto {

    @Type(()=>CompetitorsDto)
    competitors: CompetitorsDto

    @Type(()=>dateInfoDto)
    dateInfo: dateInfoDto;

    @Type(()=>VenueInfoDto)
    venueInfo:VenueInfoDto
}




// //match
class InbbetsMatchDto {
  @IsNumber()
  betradarMatchId: number;

  @Type(()=> FixtureDto)
  fixture:FixtureDto;

 @Type(()=> MatchOddsDto)
 matchOdds:MatchOddsDto
}
















// class textsCompetitorDto {

//     @IsNumber()
//     id: number;

//     @IsNumber()
//     superId: number;

//     @IsString()
//     type:string;

//     @Type(() => CompetitorTextDto)
//     texts: CompetitorTextDto[];

// }

// class CompetitorTextDto {

//     @IsString()
//     language: string;
  
//     @IsString()
//     value: string;
// }