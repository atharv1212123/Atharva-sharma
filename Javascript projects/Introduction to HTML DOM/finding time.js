function myFunction() {

    var greeting;
    
    var time = new Date().getHours();
    
    if (time < 12) {
    
    greeting = "Good morning";
    
    }
    
    else if (time < 17) {
    
    greeting = "Good evening";
    
    }
    
    else {
    
    greeting = "Good night";
    
    }
    
    console.log("Current Hour is : " + time);
    
    console.log(greeting);
    
    }
    
    myFunction()