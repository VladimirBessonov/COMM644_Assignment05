print = () => console.log('Corona Virus')
class Inventory {

    constructor(name = 'unnamed', description = 'option description') {
        this._inventoryList = [];
        this._name = name;
        this._description = description
        this.info = {
            name: this._name,
            created: new Date().toISOString(),
            description: this._description
        }
    }

    set name(value) {
        this._name = value;
        this.info.name = this._name
    }

    set description(value) {
        this._description = value;
        this.info.description = this._description
    }

    addProductToInventoryList(item) {
        this._inventoryList.push(item);
    }
    getInfo() {
        return this.info
    }
    get inventoryList() {
        return this._inventoryList.join(', ');
    }
}

class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Inventory();
        }
    }

    getInstance() {
        return Singleton.instance;
    }

}

export default print;
export {Singleton};