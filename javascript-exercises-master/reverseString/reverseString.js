
// WORKS ONLY FOR ASCII CHARACTERS
const reverseString = function(oldString) {
    let newString = oldString.split("").reverse().join("");

    return newString;
}

module.exports = reverseString;

/* ONE WAY OF SOLVING THIS:
const reverseString = function(oldString) {

    let newString = '';

    for (let i = oldString.length - 1; i >= 0; i--) {
        newString += oldString.charAt(i);
    }

    return newString;
}

module.exports = reverseString;
*/