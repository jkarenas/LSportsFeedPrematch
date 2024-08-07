import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'TournamentsLsSports', schema: 'Mappings' })
export class Tournament {

  @Column()
  LsportsLeagueName: string;

  @PrimaryGeneratedColumn()
  LsportsLeagueId: number;

  @Column()
  betradarTournamentID: number;

  @Column()
  uofTournamentID: number;

  @Column()
  InnbetsTournamentName: string;
}