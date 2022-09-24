import React from "react";
import renderer from "react-test-renderer";
import CalculatorUI from "../CalculatorUI";
import "@testing-library/jest-dom";

describe("Calculator UI", () => {
  test("Testing Calculator Interface", () => {
    const tree = render.create(<CalculatorUI />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
