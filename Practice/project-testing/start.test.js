const { test, expect } = require("@jest/globals");
// const { capitalize, reverseString, calculator } = require("./start");

import { capitalize, reverseString, calculator } from './start';

// testing if jest works
test('jest works', () => {

})

// capitalize

test('capitalize string safe', () => {
    expect(capitalize('safe')).toBe('Safe');
})

test('capitalize string SaFrE', () => {
    expect(capitalize('SaFrE')).toBe('SaFrE');
})

test('capitalize string Work', () => {
    expect(capitalize('Work')).toBe('Work');
})

test('capitalize string oompaLoompa', () => {
    expect(capitalize('oompaLoompa')).toBe('OompaLoompa');
})

// reverseString

test('reverse string oompa', () => {
    expect(reverseString('oompa')).toBe('apmoo');
})

test('reverse string with numbers', () => {
    expect(reverseString('he11o')).toBe('o11eh');
})

test('reverse string with symbols', () => {
    expect(reverseString('.42.hello')).toBe('olleh.24.');
})

// calculator
test('calculator add', () => {
    expect(calculator.add(2, 3)).toBe(5);
})

test('calculator subtract', () => {
    expect(calculator.subtract(4, 1)).toBe(3);
})

test('calculator divide', () => {
    expect(calculator.divide(12, 3)).toBe(4);
})

test('calculator multiply', () => {
    expect(calculator.multiply(12, 3)).toBe(36);
})