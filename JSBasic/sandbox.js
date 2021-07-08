// function init() {
//     var name = "Alex"; // outer function scope
    
//     function displayName() {
//         console.log(name); // inner function scope
//     }

//     return displayName;
// }

// var showName = init();

// showName();


function adder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = adder(5);

console.log(add5(10));