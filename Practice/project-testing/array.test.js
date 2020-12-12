const { test, expect } = require("@jest/globals");
const { analyze } = require("./array");

test('test if jest works', () => {

})

test('check if function is defined', () => {
    expect(analyze([1])).toBeDefined();
})

test('check array of numbers', () => {
    expect(analyze([1, 1, 1, 1])).toEqual({average: 1, min: 1, max: 1, length: 4})
})

test('check array of numbers', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})