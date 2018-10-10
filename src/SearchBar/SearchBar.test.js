import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SearchBar from "./SearchBar";

let component;
let instance;

beforeEach(() => {
  component = renderer.create(<SearchBar />);
  instance = component.getInstance();
});

it("renders correctly", () => {
  instance.props = {};
  const result = instance.render();
  expect(result).toMatchSnapshot();
});
