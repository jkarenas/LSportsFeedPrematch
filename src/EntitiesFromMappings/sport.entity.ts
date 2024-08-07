import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'SportsLsports', schema: 'Mappings' })
export class Sport {
  @PrimaryGeneratedColumn()
  LSportsSportId: number;

  @Column()
  LSportsSportName: string;

  @Column()
  InbbetsSportName: string;

  @Column()
  betradarSportId: number;
}
