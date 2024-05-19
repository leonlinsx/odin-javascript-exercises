const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array1) {
  return array1.reduce((partialSum, a) => partialSum + a, 0)
};

const multiply = function(array1) {
  return array1.reduce((partialProduct, a) => partialProduct * a)
};

const power = function(num1, num2) {
	return num1 ** num2 
};

const factorial = function(num1) {
	if (num1 === 0 || num1 === 1) {
    return 1
  } else {
    return num1 * factorial(num1 - 1)
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
