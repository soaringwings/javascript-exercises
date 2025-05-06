const sumAll = function(num1, num2) {
    let smaller;
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    } else if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR"
    } else if (!(Number.isInteger(num1) && Number.isInteger(num2))) {
        return "ERROR";
    } 
    if (num1 < num2) {
        smaller = num1;
        larger = num2
    } else {
        smaller = num2;
        larger = num1;
    }
    let sum = smaller;
    for (let i = smaller + 1; i <= larger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
