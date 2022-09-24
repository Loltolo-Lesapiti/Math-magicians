import React from 'react';
import TestRenderer from 'react-test-renderer';
import CalculatorUI from '../CalculatorUI';
import '@testing-library/jest-dom';

describe('Calculator UI', () => {
  test('Testing Calculator Interface', () => {
    const tree = TestRenderer.create(<CalculatorUI />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
