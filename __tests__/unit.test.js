// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('valid phone number', () => {
    expect(functions.isPhoneNumber("(925)220-5398")).toBe(true);
});
test('repeating valid phone number', () => {
    expect(functions.isPhoneNumber("(925)111-1111")).toBe(true);
});
test('no formatting phone number', () => {
    expect(functions.isPhoneNumber("9252205398")).toBe(false);
});
test('too short phone number', () => {
    expect(functions.isPhoneNumber("(925)220-539")).toBe(false);
});

test('valid email', () => {
    expect(functions.isEmail("student@ucsd.edu")).toBe(true);
});
test('valid email with .co', () => {
    expect(functions.isEmail("student@example.co")).toBe(true);
});
test('no @ sign', () => {
    expect(functions.isEmail("studentucsd.co")).toBe(false);
});
test('two @ signs', () => {
    expect(functions.isEmail("student@eng@ucsd.co")).toBe(false);
});

test('strong password all letters', () => {
    expect(functions.isStrongPassword("Abcdefghijk")).toBe(true);
});
test('strong password including number and underscore', () => {
    expect(functions.isStrongPassword("abc_123")).toBe(true);
});
test('too short password', () => {
    expect(functions.isStrongPassword("ABC")).toBe(false);
});
test('starts with number password', () => {
    expect(functions.isStrongPassword("123_abc")).toBe(false);
});

test('date xx/xx/xxxx', () => {
    expect(functions.isDate("11/11/2022")).toBe(true);
});
test('date x/x/xxxx', () => {
    expect(functions.isDate("1/1/2022")).toBe(true);
});
test('date xx/xx/xx', () => {
    expect(functions.isDate("11/11/22")).toBe(false);
});
test('date xx-xx-xxxx', () => {
    expect(functions.isDate("11-11-2022")).toBe(false);
});

test('lowercase 3 character hex color', () => {
    expect(functions.isHexColor("abc")).toBe(true);
});
test('uppercase 6 character hex color', () => {
    expect(functions.isHexColor("E1F79C")).toBe(true);
});
test('invalid letter hex color', () => {
    expect(functions.isHexColor("G1F79C")).toBe(false);
});
test('too long hex color', () => {
    expect(functions.isHexColor("0000000")).toBe(false);
});

