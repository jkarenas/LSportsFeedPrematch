import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'OddsLSports', schema: 'Mappings' })
export class Odd {

  @Column()
  LsportsBetName: string;

  @Column()
  InbbbetsOutcomeName: string;

  @PrimaryGeneratedColumn()
  IdMarketType: number;

  @Column()
  MarketName: string;
}