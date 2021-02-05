import { Calculator } from './../src/js/calculator.js';

describe('Calculator', () => {
  // let calculator;

  // beforeEach(() => {
  //   calculator = new Calculator();
  // });

  test('should correctly create a calculator object with inputtedAge property', () => {
    const calculator = new Calculator(30);
    expect(calculator.inputtedAge).toEqual(30);
  });
})