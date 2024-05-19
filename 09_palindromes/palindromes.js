const palindromes = function (text) {
    let cleanText = text.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').replaceAll(' ','')
    let revCleanText = cleanText.split("").reverse().join("")
    // console.log(cleanText)
    // console.log(revCleanText)
    return cleanText === revCleanText
};

// palindromes('A car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;
