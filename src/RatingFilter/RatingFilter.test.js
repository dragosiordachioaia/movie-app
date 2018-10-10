import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import RatingFilter from "./RatingFilter";

jest.mock("RangeSlider/RangeSlider", () => "RangeSlider");

let component;
let instance;

beforeEach(() => {
  component = renderer.create(<RatingFilter />);
  instance = component.getInstance();
});

it("renders correctly", () => {
  instance.props = { expanded: false };
  const result = instance.render();
  expect(result).toMatchSnapshot();
});
