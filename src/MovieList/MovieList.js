import React, { Component } from "react";

import "./MovieList.scss";

import MovieItem from "MovieItem/MovieItem";

export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.displayMovies = this.displayMovies.bind(this);
    this.getFilteredList = this.getFilteredList.bind(this);
    this.checkRating = this.checkRating.bind(this);
    this.checkGenre = this.checkGenre.bind(this);
    this.checkName = this.checkName.bind(this);
  }

  displayMovies(list) {
    return list.sort((a, b) => b.popularity - a.popularity).map(movieData => {
      return (
        <MovieItem
          key={movieData.id}
          data={movieData}
          config={this.props.config}
          genres={this.props.genres}
        />
      );
    });
  }

  /**
    This function takes care of applying all the filters: genre, rating, name.
    I believe the best place to put this is here, instead of filtering the data
    in the App component, because this is the only place where we actually need it.
    (There might be good arguments against that logic, though)
  **/
  getFilteredList() {
    return this.props.movies.filter(movieData => {
      let ratingIsOk = this.checkRating(movieData);
      let genreIsOk = this.checkGenre(movieData);
      let nameIsOk = this.checkName(movieData);

      return genreIsOk && ratingIsOk && nameIsOk;
    });
  }

  checkRating(movieData) {
    return movieData.vote_average >= this.props.minRating;
  }

  checkGenre(movieData) {
    let genreIsOk = true;
    let selectedGenres = this.props.genres.filter(
      genreData => genreData.checked
    );

    // if we have no checked genres, we assume the user wants to see all
    // movies listed
    if (selectedGenres.length > 0) {
      selectedGenres.forEach(({ id }) => {
        if (!movieData.genre_ids.includes(id)) {
          genreIsOk = false;
        }
      });
    }
    return genreIsOk;
  }

  checkName(movieData) {
    let nameIsOk = true;

    // if we have no name filter applied, we assume the user wants to see all
    // movies applied
    if (this.props.nameFilter.length > 0) {
      nameIsOk = movieData.title
        .toLowerCase()
        .includes(this.props.nameFilter.toLowerCase());
    }
    return nameIsOk;
  }

  render() {
    let filteredList = this.getFilteredList();
    let title = "Movies showing right now";
    if (filteredList.length === 0) {
      title = "No movies match your search";
    }
    return (
      <div className="movie-list-container">
        <h1 className="title">{title}</h1>
        <div className="movie-list">{this.displayMovies(filteredList)}</div>
      </div>
    );
  }
}
