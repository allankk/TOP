let reset = 'hello';

const capitalize = (string) => {
    const strCapitalized = string.charAt(0).toUpperCase() + string.slice(1);
    
    return strCapitalized;
}

const reverseString = (string) => {
    return string
                .split("")
                .reverse()
                .join("");
}

const calculator = {
    add: function(a, b) { return a + b },
    subtract: function(a, b) { return a - b },
    divide: function(a, b) { return a/b },
    multiply: function(a,b) { return a * b }
}

module.exports = {
    capitalize,
    reverseString,
    calculator
}