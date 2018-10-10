import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Genres from "./Genres";

jest.mock("GenreItem/GenreItem", () => "GenreItem");

let component;
let instance;

beforeEach(() => {
  component = renderer.create(<Genres genres={[]} />);
  instance = component.getInstance();
});

it("renders without crashing", () => {
  instance.props = {
    genres: [],
  };
  const result = instance.render();
  expect(result).toMatchSnapshot();
});

it("renders the right number of genre items", () => {
  instance.props = {
    genres: [{ id: 1 }, { id: 2 }, { id: 3 }],
  };
  const result = instance.render();
  expect(result).toMatchSnapshot();
});
