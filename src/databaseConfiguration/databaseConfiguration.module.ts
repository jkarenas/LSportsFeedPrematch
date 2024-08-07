import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { Sport } from 'src/EntitiesFromMappings/sport.entity';
import { SportsMappingsModule } from 'src/persistence/sports-mappings/sports-mappings.module';
import { CategoriesMappingsModule } from 'src/persistence/categories-mappings/categories-mappings.module';
import { Tournament } from 'src/EntitiesFromMappings/tournament.entity';
import { TournamentsMappingsModule } from 'src/persistence/tournaments-mappings/tournaments-mappings.module';
import { Market } from 'src/EntitiesFromMappings/market.entity';
import { MarketsMappingsModule } from 'src/persistence/markets-mappings/markets-mappings.module';
import { Odd } from 'src/EntitiesFromMappings/odd.entity';
import { OddsMappingsModule } from 'src/persistence/odds-mappings/odds-mappings.module';

dotenv.config();

@Global()
@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'mssql',
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME, // Especifica el nombre de la base de datos
            entities: [Sport,Tournament,Market,Odd],
            synchronize: false,
            options: {
                encrypt: false,
            },
            extra: {
                defaultSchema: "Mappings",
                trustServerCertificate: true,
                options: {
                    encrypt: true,
                    integratedSecurity: true,
                },
            },
        }),
        SportsMappingsModule,
        TournamentsMappingsModule,
        MarketsMappingsModule,
        OddsMappingsModule,
        
        
    ],
})
export class DatabaseModule {}
