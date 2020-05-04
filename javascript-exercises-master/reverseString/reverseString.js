const reverseString = function(oldString) {

    let newString = '';

    for (let i = oldString.length - 1; i >= 0; i--) {
        newString += newString.charAt(i);
    }

    return newString;

}

module.exports = reverseString
