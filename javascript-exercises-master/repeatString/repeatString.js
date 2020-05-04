const repeatString = function(str, times) {
    let finalString = '';

    if (times < 0) {
        return 'ERROR';
    }

    for (let i = 0; i < times; i++) {
        finalString += str;
    }

    return finalString;
}

module.exports = repeatString
