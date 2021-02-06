import { Calculator } from './../src/js/calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator('Chloe', 30, 81.1);
  });

  test('should correctly create a calculator object', () => {
    expect(calculator).toBeInstanceOf(Calculator);
  });

  test('should correctly create a calculator object with inputtedName property', () => {
    expect(calculator.inputtedName).toEqual('Chloe');
  })

  test('should correctly create a calculator object with inputtedAge property', () => {
    expect(calculator.inputtedAge).toEqual(30);
  });

  test('should correctly create a calculator object with lifeExpectancy property', () => {
    expect(calculator.lifeExpectancy).toEqual(81.1);
  })

  test('should correctly return inputted name and thank you message', () => {
    expect(calculator.thankYou()).toEqual('Thank you for using the Super Galactic Calculator, Chloe! Take a look at your results below!');
  })

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

  test('should correctly return approximate remaining life expectancy on Mercury', () => {
    expect(calculator.mercuryLifeExpectancy()).toEqual(212);
  });

  test('should correctly return approximate remaining life expectancy on Venus', () => {
    expect(calculator.venusLifeExpectancy()).toEqual(83);
  });

  test('should correctly return approximate remaining life expectancy on Mars', () => {
    expect(calculator.marsLifeExpectancy()).toEqual(27);
  });

  test('should correctly return approximate remaining life expectancy on Jupiter', () => {
    expect(calculator.jupiterLifeExpectancy()).toEqual(4);
  });
})