import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import RangeSlider from "./RangeSlider";

// jest.mock("RangeSlider/RangeSlider", () => "RangeSlider");

let component;
let instance;

beforeEach(() => {
  component = renderer.create(<RangeSlider />);
  instance = component.getInstance();
});

it("renders correctly", () => {
  instance.props = {
    value: 3,
    min: 0,
    max: 10,
  };
  const result = instance.render();
  expect(result).toMatchSnapshot();
});

it("does not mouse record movement if mouseDown is false", () => {
  let mockOnChange = jest.fn();
  instance.state = {
    mouseDown: false,
  };
  instance.onMouseMove({});
  expect(mockOnChange).not.toBeCalled();
});

it("does not touch record movement if touchStart is false", () => {
  let mockOnChange = jest.fn();
  instance.state = {
    touchStart: false,
  };
  instance.onTouchMove({});
  expect(mockOnChange).not.toBeCalled();
});

it("correctly records mouse movement if mouseDown is true", () => {
  let mockOnChange = jest.fn();
  instance.state = {
    mouseDown: true,
  };
  instance.axisRef = {
    current: {
      offsetWidth: 100,
      getBoundingClientRect: () => {
        return {
          left: 10,
        };
      },
    },
  };
  let mockCallOnChange = jest.fn();
  instance.callOnChange = mockCallOnChange;
  instance.onMouseMove({ screenX: 20 });
  expect(mockCallOnChange).toBeCalledWith(0.1);
});

it("correctly records touch movement if touchStart is true", () => {
  let mockOnChange = jest.fn();
  instance.state = {
    touchStart: true,
  };
  instance.axisRef = {
    current: {
      offsetWidth: 100,
      getBoundingClientRect: () => {
        return {
          left: 10,
        };
      },
    },
  };
  let mockCallOnChange = jest.fn();
  instance.callOnChange = mockCallOnChange;
  instance.onTouchMove({
    changedTouches: [{ pageX: 20 }],
  });
  expect(mockCallOnChange).toBeCalledWith(0.1);
});

it("correctly sends amount on change", () => {
  let mockOnChange = jest.fn();
  instance.props = {
    onChange: mockOnChange,
    min: 0,
    max: 10,
    step: 0.5,
  };
  instance.callOnChange(0.33);
  expect(mockOnChange).toBeCalledWith("3.5");
});
