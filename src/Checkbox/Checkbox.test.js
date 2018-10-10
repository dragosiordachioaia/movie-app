import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Checkbox from "./Checkbox";

// jest.mock("Header/Header", () => "Header");

let component;
let instance;

beforeEach(() => {
  component = renderer.create(<Checkbox />);
  instance = component.getInstance();
});

it("renders without crashing", () => {
  const result = instance.render();
  expect(result).toMatchSnapshot();
});

it("renders when checked via props", () => {
  instance.props = {
    checked: true,
  };
  const result = instance.render();
  expect(result).toMatchSnapshot();
});

it("renders when unchecked via props", () => {
  instance.props = {
    checked: false,
  };
  const result = instance.render();
  expect(result).toMatchSnapshot();
});

it("does not crash if onChange callback is not a function", () => {
  instance.props = {
    checked: false,
    onChange: 3,
  };
  expect(instance.toggle).not.toThrow();
});

it("toggles on", () => {
  let mockOnCheck = jest.fn();
  instance.props = {
    checked: false,
    onCheck: mockOnCheck,
  };
  let dummyEvent = { testEvent: true };
  instance.toggle(dummyEvent);
  expect(mockOnCheck).toBeCalled();
  expect(mockOnCheck).toBeCalledWith(dummyEvent, true);
});

it("toggles off", () => {
  let mockOnCheck = jest.fn();
  instance.props = {
    checked: true,
    onCheck: mockOnCheck,
  };
  let dummyEvent = { testEvent: true };
  instance.toggle(dummyEvent);
  expect(mockOnCheck).toBeCalled();
  expect(mockOnCheck).toBeCalledWith(dummyEvent, false);
});

it("toggles on space", () => {
  let mockToggle = jest.fn();
  instance.props = {};
  instance.toggle = mockToggle;
  instance.onKeyDown({ keyCode: 13, preventDefault: jest.fn() });
  expect(mockToggle).toBeCalled();
});

it("toggles on enter", () => {
  let mockToggle = jest.fn();
  instance.props = {};
  instance.toggle = mockToggle;
  instance.onKeyDown({ keyCode: 32, preventDefault: jest.fn() });
  expect(mockToggle).toBeCalled();
});
