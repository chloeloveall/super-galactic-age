import { Calculator } from './../src/js/calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should correctly create a calculator object', () => {
    expect(calculator).toBeInstanceOf(Calculator);
  })
})