import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import App from "./App";

jest.mock("Header/Header", () => "Header");
jest.mock("SideBar/SideBar", () => "SideBar");
jest.mock("MovieList/MovieList", () => "MovieList");

import axios from "axios";

axios.get = () => {
  return {
    then: () => {},
  };
};

let component;
let instance;

beforeEach(() => {
  component = renderer.create(<App />);
  instance = component.getInstance();
});

it("renders loading state initially", () => {
  const result = instance.render();
  expect(result).toMatchSnapshot();
});

it("renders correctly if loaded", () => {
  instance.state = {
    config: {},
    movies: [],
    genres: [],
  };
  const result = instance.render();
  expect(result).toMatchSnapshot();
});

it("toggles a genre on", () => {
  instance.state = {
    genres: [{ id: 4 }],
  };
  instance.onGenreCheck({ id: 4 });
  expect(instance.state.genres[0].checked).toBe(true);
});

it("toggles a genre off", () => {
  instance.state = {
    genres: [{ id: 4, checked: true }],
  };
  instance.onGenreCheck({ id: 4 });
  expect(instance.state.genres[0].checked).toBe(false);
});

it("expands the sidebar", () => {
  instance.state = {
    sidebarExpanded: false,
  };
  instance.onToggleSidebar();
  expect(instance.state.sidebarExpanded).toBe(true);
});

it("collapses the sidebar", () => {
  instance.state = {
    sidebarExpanded: true,
  };
  instance.onToggleSidebar();
  expect(instance.state.sidebarExpanded).toBe(false);
});

it("sets the name filter", () => {
  instance.state = {
    nameFilter: "old",
  };
  instance.onUpdateNameFilter("new");
  expect(instance.state.nameFilter).toEqual("new");
});

it("changes the min rating", () => {
  instance.state = {
    minRating: 3,
  };
  instance.onMinRatingChange(4);
  expect(instance.state.minRating).toEqual(4);
});

it("correctly renders the expanded state", () => {
  instance.state = {
    config: {},
    movies: [],
    genres: [],
    sidebarExpanded: true,
  };
  const result = instance.render();
  expect(result).toMatchSnapshot();
});

it("correctly renders the non-expanded state", () => {
  instance.state = {
    config: {},
    movies: [],
    genres: [],
    sidebarExpanded: false,
  };
  const result = instance.render();
  expect(result).toMatchSnapshot();
});
