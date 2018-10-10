import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import MovieList from "./MovieList";

let component;
let instance;

beforeEach(() => {
  component = renderer.create(<MovieList movies={[]} />);
  instance = component.getInstance();
});

it("renders correctly when no movies", () => {
  instance.getFilteredList = jest.fn().mockReturnValue([]);
  instance.displayMovies = jest.fn().mockReturnValue("__movies-here__");
  const result = instance.render();
  expect(result).toMatchSnapshot();
});

it("renders correctly when it has movies", () => {
  instance.props = { movies: [{}, {}], genres: [], nameFilter: "" };
  instance.getFilteredList = jest.fn().mockReturnValue([{}, {}]);
  instance.displayMovies = jest.fn().mockReturnValue("__movies-here__");
  const result = instance.render();
  expect(result).toMatchSnapshot();
});

it("correctly displays and sorts movies", () => {
  instance.props = { movies: [{}, {}], genres: [], nameFilter: "" };
  let list = [
    {
      popularity: 0,
      id: 0,
    },
    {
      popularity: 1,
      id: 1,
    },
  ];
  const result = instance.displayMovies(list);
  expect(result).toMatchSnapshot();
});

it("correctly filters movies", () => {
  instance.props = {
    movies: [
      {
        popularity: 2,
        title: "Avengers 1",
        genre_ids: [0, 1],
        vote_average: 5,
      },
      {
        popularity: 3,
        title: "Avengers 2",
        genre_ids: [0, 1],
        vote_average: 4,
      },
      {
        popularity: 4,
        title: "Avengers 3",
        genre_ids: [0, 1],
        vote_average: 6,
      },
      {
        popularity: 5,
        title: "Venom",
        genre_ids: [0],
        vote_average: 7,
      },
    ],
    genres: [
      {
        id: 0,
        name: "Action",
        checked: true,
      },
      {
        id: 1,
        name: "Adventure",
        checked: true,
      },
      {
        id: 2,
        name: "Comedy",
        checked: false,
      },
    ],
    nameFilter: "av",
    minRating: 5,
  };
  const result = instance.getFilteredList();
  expect(result).toMatchSnapshot();
});
