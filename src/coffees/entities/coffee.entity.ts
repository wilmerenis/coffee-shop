import {
  Entity,
  Column,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // this decorator tells TypeORM that this is an entity
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany(() => Flavor, (flavor) => flavor.coffees, {
    cascade: true, // this will allow us to save a coffee and its flavors in one go
  })
  flavors: Flavor[];

  @Column({ default: 0 })
  recommendations: number;
}
