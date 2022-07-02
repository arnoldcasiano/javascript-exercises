const sumAll = function(num1, num2) {
    let sum = 0;
    let checkNums = num1 + num2;
    if (checkNums < 0 || typeof(checkNums) !== "number") {
        return "ERROR";
    } else if (num1 < num2) {
        while (num1 !== num2 + 1) {
            sum += num1;
            num1++;
        }
        return sum;
    } else if (num2 < num1) {
        while (num2 !== num1 + 1) {
            sum += num2;
            num2++;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
