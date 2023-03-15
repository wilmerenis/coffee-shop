import { Module } from '@nestjs/common';
import { Event } from 'src/events/entities/event.entity';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { CoffeeService } from './coffee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  providers: [CoffeeService],
  controllers: [CoffeesController],
})
export class CoffeesModule {}
