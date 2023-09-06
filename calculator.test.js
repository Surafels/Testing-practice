const Calculator = require('./calculator');

describe('Calculator', () => {
    let calculator;
    beforeEach(() =>{
        calculator = new Calculator;
    });
    test('add positive number',  () => {
        const result = calculator.add(5,5);
        expect(result).toBe(10);
        
    });
    test('add negative number',  () => {
        const result = calculator.add(-5,-5);
        expect(result).toBe(-10);
        
    });
    test('add 0',  () => {
        const result = calculator.add(5,0);
        expect(result).toBe(5);
        
    });
    test('subtract positive number', () => {
        const result = calculator.subtract(5,9);
        expect(result).toBe(-4);
    });
    test('subtract negative number', () => {
        const result = calculator.subtract(-5,-2);
        expect(result).toBe(-3);
    });
    test('subtract zero', () => {
        const result = calculator.subtract(5,0);
        expect(result).toBe(5);
    });
    test('multiply positive number', () => {
        const result = calculator.multiply(5,5);
        expect(result).toBe(25);
    });
    test('multiply negative number', () => {
        const result = calculator.multiply(-5,-5);
        expect(result).toBe(25);
    });
    test('multiply zero', () => {
        const result = calculator.multiply(5,0);
        expect(result).toBe(0);
    });
    test('divide', () => {
        const result = calculator.divide(5,5);
        expect(result).toBe(1);
    });

    test('divide by zero', () => {
    expect(() => {
      calculator.divide(5, 0);
    }).toThrow("Number can't divide by zero");
  });
});
