import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Repository, DataSource } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
export declare class CoffeeService {
    private readonly coffeeRepository;
    private readonly flavorRepository;
    private readonly dataSource;
    constructor(coffeeRepository: Repository<Coffee>, flavorRepository: Repository<Flavor>, dataSource: DataSource);
    findAll(paginationQuery: PaginationQueryDto): Promise<Coffee[]>;
    findOne(id: string): Promise<Coffee>;
    create(createCoffeeDto: CreateCoffeeDto): Promise<Coffee>;
    update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise<Coffee>;
    remove(id: string): Promise<Coffee>;
    private preloadFlavorByName;
    recommendCoffee(coffee: Coffee): Promise<void>;
}
