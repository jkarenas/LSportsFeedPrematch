import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'MarketsLSports', schema: 'Mappings' })
export class Market {
  @PrimaryGeneratedColumn()
  LsportMarketId: number;

  @Column()
  InbbetsOddsTypeMarketId: number;
}