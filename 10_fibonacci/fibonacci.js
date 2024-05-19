const fibonacci = function(num1) {
    num1 = Number(num1)
    if (num1 < 0){
        return "OOPS"
    } else if (num1 === 0 || num1 === 1) {
        return num1
    } else {
        let n1 = 0, n2 = 1, nextTerm
        for (let i = 1; i <= num1; i++) {
            nextTerm = n1 + n2
            n1 = n2 
            n2 = nextTerm
        }
        return n1
    }
};

// 1, 1, 2, 3, 5, 8, 

// console.log(fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
