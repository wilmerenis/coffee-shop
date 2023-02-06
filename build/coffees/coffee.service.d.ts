import { Coffee } from './entities/coffee.entity';
export declare class CoffeeService {
    private coffees;
    findAll(): Coffee[];
    findOne(id: string): Coffee;
    create(createCoffeeDto: any): void;
    update(id: string, updateCoffeeDto: any): void;
    remove(id: string): void;
}
