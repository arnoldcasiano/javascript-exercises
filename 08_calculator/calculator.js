const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  let total = numbers.reduce((totalSum, currentValue) => {
    return totalSum + currentValue;
  }, 0);
  return total;
};

const multiply = function(numbers) {
  let total = numbers.reduce((totalProduct, currentValue) => {
    return totalProduct * currentValue;
  });
  return total;
};

const power = function(number, power) {
	return number ** power;
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  }
  else {
    let array = [number];
    let count = number;
    for (let i  = 0; i < count - 1; i++) {
      number--;
      array.push(number);
    }

    let result = array.reduce((firstValue, currentValue) => {
      return firstValue * currentValue;
    });
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
