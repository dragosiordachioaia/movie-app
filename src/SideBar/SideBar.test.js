import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SideBar from "./SideBar";

jest.mock("RatingFilter/RatingFilter", () => "RatingFilter");
jest.mock("Genres/Genres", () => "Genres");

let component;
let instance;

beforeEach(() => {
  component = renderer.create(<SideBar />);
  instance = component.getInstance();
});

it("renders correctly when not expanded", () => {
  instance.props = { expanded: false };
  const result = instance.render();
  expect(result).toMatchSnapshot();
});
it("renders correctly when expanded", () => {
  instance.props = { expanded: true };
  const result = instance.render();
  expect(result).toMatchSnapshot();
});
