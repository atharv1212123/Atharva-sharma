class Student {

    constructor(name) {
    
    this.studentname = name;
    
    }
    
    static hello() { // static method
    
    return "Hello!!";
    
    }
    
    
    }
    
    myname = new Student("Carol");
    

    console.log(hello());