import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeesController } from './coffees.controller';

@Module({
  imports: [],
  providers: [CoffeeService],
  controllers: [CoffeesController],
})
export class CoffeesModule {}
