const fibonacci = function() {
    const arg = parseInt(arguments[0]);
    if (arg < 0) return 'OOPS';

    let fibonacciArray = [0, 1];

    for (let i = 1; i < arg; i++) {
        fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i-1]);
    }

    return fibonacciArray[fibonacciArray.length - 1];
}

module.exports = fibonacci
