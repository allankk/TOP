const someOrder = {
    items: [
        {name: 'Dragon food', price: 8},
        {name: 'Dragon cage(small)', price: 800}
    ]
}

const orderTotal = order => order.items
    .reduce((prev, cur) => prev + cur.price, 0)

result = orderTotal(someOrder);

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    sum: sum,
    subtract: subtract
}
