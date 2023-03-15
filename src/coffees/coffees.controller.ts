import {
  Body,
  Get,
  Put,
  Post,
  Param,
  Delete,
  Controller,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { CoffeeService } from 'src/coffees/coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeeService) {}
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.coffeeService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const coffee = this.coffeeService.findOne(id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    this.coffeeService.create(createCoffeeDto);
    return createCoffeeDto;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    this.coffeeService.update(id, updateCoffeeDto);
    return updateCoffeeDto;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
