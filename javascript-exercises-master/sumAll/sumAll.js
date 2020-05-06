const sumAll = function() {
    
    if (arguments.length != 2) {
        return "ERROR";
    }

    if (!Number.isInteger(arguments[0]) || !Number.isInteger(arguments[1])) {
        return "ERROR";
    }

    if (arguments[0] < 0 || arguments[1] < 0) {
        return "ERROR";
    }

    let smallerNum;
    let biggerNum;

    if (arguments[0] < arguments[1]) {
        smallerNum = arguments[0];
        biggerNum = arguments[1];
    } else {
        smallerNum = arguments[1];
        biggerNum = arguments[0];
    }
    
    let sum = 0;

    for (smallerNum; smallerNum <= biggerNum; smallerNum++) {
        sum += smallerNum;
    }

    return sum;
}

module.exports = sumAll
