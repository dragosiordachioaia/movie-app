import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import GenreItem from "./GenreItem";

jest.mock("Checkbox/Checkbox", () => "Checkbox");

let component;
let instance;

beforeEach(() => {
  component = renderer.create(<GenreItem />);
  instance = component.getInstance();
});

it("renders without crashing", () => {
  instance.props = {
    checked: true,
    name: "Action",
  };
  const result = instance.render();
  expect(result).toMatchSnapshot();
});
