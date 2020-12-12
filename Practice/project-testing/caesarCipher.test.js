const { test, expect } = require("@jest/globals");
const caesarCipher = require("./caesarCipher");


// check if test works
test('test file works', () => {

});

// caesar cipher
test('check if function returns anything', () => {
    expect(caesarCipher('hello', 1)).toBeDefined();
})

test('test general string', () => {
    expect(caesarCipher('hello', 1)).toBe('ifmmp');
})

test('test negative cipher', () => {
    expect(caesarCipher('broom', -1)).toBe('aqnnl');
})

test('test general string 3 characters', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
})

test('wrapping from z to a', () => {
    expect(caesarCipher('broz', 1)).toBe('cspa');
})

test('wrapping from a to z', () => {
    expect(caesarCipher('aabb', -1)).toBe('zzaa');
})

test('punctuation', () => {
    expect(caesarCipher('9:?..,', 2)).toBe('9:?..,')
})