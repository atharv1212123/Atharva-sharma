function findMax() {

    var max = 0;
    
    for (i = 0; i < arguments.length; i++) {
    
    if (arguments[i] > max) {
    
    max = arguments[i];
    
    }
    
    }
    
    return max;
    
    }
    
    console.log(findMax(8, 4, 5, 6, 2, 100));

    