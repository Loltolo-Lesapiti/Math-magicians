import React from "react";
import renderer from "react-test-renderer";
import Home from "../Home";
import "@testing-library/jest-dom";

describe("Home Page", () => {
  test("Testing Home page ", () => {
    const tree = render.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
