const { sum, subtract } = require('./start');

test('two plus two is four', () => {
    expect(sum(2, 2)).toBe(4);
})