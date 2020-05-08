const palindromes = function() {

    const strArray = Array.from(arguments[0]);
    const strArrayFiltered = strArray.filter(character => character.match(/[a-zA-Z]/i))
    const strArrayToLower = strArrayFiltered.map(character => character.toLowerCase());

    const reversedStrArray = strArrayToLower.slice().reverse();

    for (let i = 0; i < strArrayToLower.length; i++) {
        if (strArrayToLower[i] != reversedStrArray[i]) return false;
    }

    return true;
}

module.exports = palindromes
