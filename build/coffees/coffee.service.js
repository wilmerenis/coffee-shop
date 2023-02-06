"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeService = void 0;
const common_1 = require("@nestjs/common");
let CoffeeService = class CoffeeService {
    constructor() {
        this.coffees = [
            {
                id: 1,
                name: 'Shipwreck Roast',
                brand: 'Buddy Brew',
                flavors: ['chocolate', 'vanilla'],
            },
        ];
    }
    findAll() {
        return this.coffees;
    }
    findOne(id) {
        return this.coffees.find((item) => item.id === +id);
    }
    create(createCoffeeDto) {
        this.coffees.push(createCoffeeDto);
    }
    update(id, updateCoffeeDto) {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {
            this.coffees = this.coffees.map((item) => item.id === +id ? Object.assign(Object.assign({}, item), updateCoffeeDto) : item);
        }
    }
    remove(id) {
        const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
};
CoffeeService = __decorate([
    (0, common_1.Injectable)()
], CoffeeService);
exports.CoffeeService = CoffeeService;
//# sourceMappingURL=coffee.service.js.map