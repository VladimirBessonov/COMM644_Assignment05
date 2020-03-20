import print from './inventory.js';
import {Singleton as Inventory} from "./inventory.js";
// let inventory = [];
// let products = [];
let inventory = new Inventory().getInstance()
inventory.name = 'San Diego'
inventory.description = 'Kearny Mesa retail'
inventory.addProductToInventoryList([2233, 'Hat', 12, 14.99]);

console.log(inventory.getInfo())
console.log(inventory.inventoryList)
print();