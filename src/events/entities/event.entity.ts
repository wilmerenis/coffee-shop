import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Index(['type', 'name'])
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  type: string;

  @Index()
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
