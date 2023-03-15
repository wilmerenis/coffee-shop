import { CoffeeService } from 'src/coffees/coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
export declare class CoffeesController {
    private readonly coffeeService;
    constructor(coffeeService: CoffeeService);
    findAll(paginationQuery: PaginationQueryDto): Promise<import("./entities/coffee.entity").Coffee[]>;
    findOne(id: string): Promise<import("./entities/coffee.entity").Coffee>;
    create(createCoffeeDto: CreateCoffeeDto): CreateCoffeeDto;
    update(id: string, updateCoffeeDto: UpdateCoffeeDto): UpdateCoffeeDto;
    remove(id: string): Promise<import("./entities/coffee.entity").Coffee>;
}
