import React from 'react';
import TestRenderer from 'react-test-renderer';
import Quote from '../Quotes';
import '@testing-library/jest-dom';

describe('Quote Page', () => {
  test('Testing Quote page ', () => {
    const tree = TestRenderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
