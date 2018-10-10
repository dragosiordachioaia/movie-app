import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import MovieItem from "./MovieItem";

// jest.mock("SearchBar/SearchBar", () => "SearchBar");

import * as utils from "utils";
utils.getImagePath = (imageID, config) => {
  return `https://server.com/${imageID}`;
};

let component;
let instance;

beforeEach(() => {
  component = renderer.create(<MovieItem data={{}} genres={[]} />);
  instance = component.getInstance();
});

it("renders correctly when loaded", () => {
  instance.state = {
    imageLoaded: true,
  };
  instance.props = {
    data: {
      genre_ids: [4],
      title: "Awesome new film",
      vote_average: 10,
      poster_path: "/path_to_image.jpg",
    },

    genres: [
      {
        id: 4,
        name: "Action",
      },
    ],
  };
  const result = instance.render();
  expect(result).toMatchSnapshot();
});

it("renders correctly when not loaded", () => {
  instance.state = {
    imageLoaded: false,
  };
  instance.props = {
    data: {
      genre_ids: [4],
      title: "Awesome new film",
      vote_average: 10,
      poster_path: "/path_to_image.jpg",
    },

    genres: [
      {
        id: 4,
        name: "Action",
      },
    ],
  };
  const result = instance.render();
  expect(result).toMatchSnapshot();
});
