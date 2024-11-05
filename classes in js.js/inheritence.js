class fruit{
    constructor(fruit) {
        this.fruit=fruit;
    }
}

    return"i have a " + this.fruitname;
class fruitname extends fruit { // child class

    constructor(fruit, fruitname) {
    
    super(fruit);
    
    this.fruitname = fruitname;
    
    }
    
    show() {
    
    return this.present() + ', it is a ' + this.fruitname;
    
    }
    
    }
    
    let myCar = new Model("apple", "fruit");
    
    console.log(fruit.show());



