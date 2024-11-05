class student {

    constructor(name, year) {
    
    this.name = name;
    
    this.year = year;
    
    }
    
    
    age(){
    
    let date = new Date();
    
    return date.getFullYear() - this.year;
    
    }
    
    }
    
    
    student1 = new student("Atharv", 2012);
    
    console.log(
    
    "My name is " + student1.name + ", I am born in " + student1.year + ",  And my age is " + student1.age())
    
    
    