import { Calculator } from './../src/js/calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator(30);
  });


  test('should correctly create a calculator object with inputtedAge property', () => {
    expect(calculator.inputtedAge).toEqual(30);
  });

  test('should correctly convert inputtedAge to age in number of Earth days', () => {
    expect(calculator.earthDays).toEqual(10950);
  })

  test('should correctly convert inputtedAge to Mercury Age', () => {
    expect(calculator.mercuryAge).toEqual(124);
  })
})