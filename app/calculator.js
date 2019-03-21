function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function isOdd(a) { 
    if ((a%2) == 0)
    return false
    else 
    return true;
}

function isEven(a) { 
    if ((a%2) == 0)
    return true
    else 
    return false;
}

function divisibleBy(a,b) { 
    if ((a%b) == 0)
    return true
    else 
    return false;
}

function square(a) { 
    return a*a;

}

console.log("this is running");
console.log(divisibleBy(10,0));
console.log(isEven(0));

module.exports = {
    add,
    subtract,
    multiply,
    isOdd,
    isEven,
    divisibleBy,
    square
};