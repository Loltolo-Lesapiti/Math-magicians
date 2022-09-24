import operate from "../operator";

describe('Unit test of the Calculator Logic', () => {
    const firstNum = '10';
    const secondNum = '2';
  test('Testing Addition', () => {
    const operation = '+';
    expect(operate(firstNum, secondNum, operation)).toEqual('12');
  });

  test('Testing Subtraction', () => {
    const operation = '-';
    expect(operate(firstNum, secondNum, operation)).toEqual('8');
  });

  test('Testing Division', () => {
    const operation = '÷';
    expect(operate(firstNum, secondNum, operation)).toEqual('5');
  });

  test('Testing multiplication', () => {
    const operation = 'x';
    expect(operate(firstNum, secondNum, operation)).toEqual('20');
  });
});
