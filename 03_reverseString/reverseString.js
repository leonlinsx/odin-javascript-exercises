const reverseString = function(word) {
    let text = ""
    for (let i = 1; i < word.length + 1; i++) {
        text += word.at(-i)
    }
    return text 
};

// Do not edit below this line
module.exports = reverseString;
