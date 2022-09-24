import calculate from '../calculate';

describe('Operation Unit Testing', () => {
  test('Operation plus', () => {
    const obj = {
      total: '10',
      next: '2',
      operation: '+',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toEqual({
      total: '12',
      next: null,
      operation: null,
    });
  });

  test('Opreation minus', () => {
    const obj = {
      total: '10',
      next: '2',
      operation: '-',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });

  test('Operation times', () => {
    const obj = {
      total: '10',
      next: '2',
      operation: '×',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toEqual({
      total: '20',
      next: null,
      operation: null,
    });
  });
});
