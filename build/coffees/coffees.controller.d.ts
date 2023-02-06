import { CoffeeService } from 'src/coffees/coffee.service';
export declare class CoffeesController {
    private readonly coffeeService;
    constructor(coffeeService: CoffeeService);
    findAll(): import("./entities/coffee.entity").Coffee[];
    findOne(id: string): import("./entities/coffee.entity").Coffee;
    create(body: any): void;
    update(id: string, body: any): void;
    remove(id: string): void;
}
