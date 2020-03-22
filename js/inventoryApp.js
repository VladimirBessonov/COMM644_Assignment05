import print from './inventory.js';
import {Singleton as Inventory} from "./inventory.js";
// let inventory = [];
// let products = [];

const cmd = document.getElementById('cmd')
cmd.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        let command = document.getElementById("cmd").value
        console.log(command)
        switch (command) {
            case 'update':
                break;
            case 'add':
                break;
            case 'delete':
                break;
            case 'exit':
                window.close();
                break;
            default:
                alert('Enter Valid Command')
        }

    }
});

let inventory = new Inventory().getInstance()
inventory.name = 'San Diego'
inventory.description = 'Kearny Mesa retail'
inventory.addProductToInventoryList([2233, 'Hat', 12, 14.99]);

console.log(inventory.getInfo())
console.log(inventory.inventoryList)
print();