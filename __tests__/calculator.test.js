import { Calculator } from './../src/js/calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator(30);
  });

  test('should correctly create a calculator object', () => {
    expect(calculator).toBeInstanceOf(Calculator);
  });

  test('should correctly create a calculator object with inputtedAge property', () => {
    expect(calculator.inputtedAge).toEqual(30);
  });

  test('should correctly convert inputtedAge to age in number of Earth days', () => {
    expect(calculator.earthDays()).toEqual(10950);
  });

  test('should correctly convert inputtedAge to Mercury Age', () => {
    expect(calculator.mercuryAge()).toEqual(124);
  });

  test('should correctly convert inputtedAge to Venus Age', () => {
    expect(calculator.venusAge()).toEqual(49);
  });

  test('should correctly convert inputtedAge to Mars Age', () => {
    expect(calculator.marsAge()).toEqual(16);
  });

  test('should correctly convert inputtedAge to Jupiter Age', () => {
    expect(calculator.jupiterAge()).toEqual(3);
  });

  
})