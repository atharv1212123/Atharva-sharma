var levels =[5,6,2,4,8,,7,4,98,0]
console.log(levels)
function ascending() {

    levels.sort(function (a, b) { return a - b });
    
    console.log(levels);
    
    }
    
    function descending() {
    
    levels.sort(function (a, b) { return b - a });
    
    console.log(levels);
    
    }
ascending()
descending()