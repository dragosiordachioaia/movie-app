import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Header from "./Header";

jest.mock("SearchBar/SearchBar", () => "SearchBar");

let component;
let instance;

beforeEach(() => {
  component = renderer.create(<Header />);
  instance = component.getInstance();
});

it("renders without crashing", () => {
  instance.props = {};
  const result = instance.render();
  expect(result).toMatchSnapshot();
});
