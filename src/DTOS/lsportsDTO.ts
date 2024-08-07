import { IsArray, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class LSportSportDto {
    @IsNumber()
    Id: number;
  
    @IsString()
    Name: string;
  }

class LSportParticipantDto {
  @IsNumber()
  Id: number;

  @IsString()
  Name: string;

  @IsString()
  Position: string;
}

class LSportMarketBetDto {
  @IsNumber()
  Id: number;

  @IsString()
  Name: string;

  @IsNumber()
  Status: number;

  @IsString()
  StartPrice: string;

  @IsString()
  ProviderBetId: string;

  @IsString()
  LastUpdate: string;
}

class LSportMarketDto {
  @IsNumber()
  Id: number;

  @IsString()
  Name: string;

  @IsArray()
  // @ValidateNested({ each: true })
  @Type(() => LSportMarketBetDto)
  Bets: LSportMarketBetDto[];
}



class LSportLocationDto {
  @IsNumber()
  Id: number;

  @IsString()
  Name: string;
}

class LSportLeagueDto {
  @IsNumber()
  Id: number;

  @IsString()
  Name: string;
}

class LSportFixtureMainDto {
  @ValidateNested()
  @Type(() => LSportSportDto)
  Sport: LSportSportDto;

  @ValidateNested()
  @Type(() => LSportLocationDto)
  Location: LSportLocationDto;

  @ValidateNested()
  @Type(() => LSportLeagueDto)
  League: LSportLeagueDto;

  @IsString()
  StartDate: string;

//   @IsString()
//   LastUpdate: string;

//   @IsNumber()
//   status: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LSportParticipantDto)
  Participants: LSportParticipantDto[];

  // @IsArray()
  // // @ValidateNested({ each: true })
  // @Type(() => LSportMarketDto)
  // Markets: LSportMarketDto[];

  @IsString()
  ExternalFixtureId: string;
}

class LSportBodyDto {
    @IsNumber()
    FixtureId: number;

   @Type(()=>LSportFixtureMainDto)
   Fixture: LSportFixtureMainDto

//    @IsOptional()
//    @IsObject()
//    Livescore: any;

   @IsArray()
   @Type(() => LSportMarketDto)
   Markets: LSportMarketDto[]
}

export class LSportsDto {

  @IsArray()
  @ValidateNested({each:true})
  @Type(() => LSportBodyDto)
  Body: LSportBodyDto[];
}
