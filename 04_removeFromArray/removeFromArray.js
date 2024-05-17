const removeFromArray = function(arr, ...theArgs) {
    arr = arr.filter(item => !theArgs.includes(item))
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
