const reverseString = require('./reverse.js');

test('should reverse a string' , () =>{
    expect (reverseString('hello')).toBe('olleh');
});