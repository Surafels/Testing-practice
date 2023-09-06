
const stringLength = require('./string.js');
it('works' , () => {
    expect(1).toBe(1);
});

test('The string Length', () => {
    expect (stringLength('surafi')).toBe(6);
    expect (stringLength('9846')).toBe(4);
    expect (stringLength(' ')).toBe(1);
});

test('The string must be a string', () => {
    expect(() => stringLength(sura)).toThrow();
});
test('The string length must be between 1 and 10', () => {
    expect(() => stringLength('hello, world!')).toThrow('Invalid string length');
});








