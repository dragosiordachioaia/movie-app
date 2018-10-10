import React, { Component } from "react";

import "./MovieList.scss";

import MovieItem from "MovieItem/MovieItem";

export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.displayMovies = this.displayMovies.bind(this);
    this.getFilteredList = this.getFilteredList.bind(this);
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

  getFilteredList() {
    return this.props.movies.filter(movieData => {
      let ratingIsOk = movieData.vote_average >= this.props.minRating;
      let genreIsOk = true;
      let nameIsOk = true;
      let selectedGenres = this.props.genres.filter(
        genreData => genreData.checked
      );
      if (this.props.nameFilter.length > 0) {
        nameIsOk = movieData.title
          .toLowerCase()
          .includes(this.props.nameFilter.toLowerCase());
      }
      if (selectedGenres.length > 0) {
        selectedGenres.forEach(({ id }) => {
          if (!movieData.genre_ids.includes(id)) {
            genreIsOk = false;
          }
        });
      }
      return genreIsOk && ratingIsOk && nameIsOk;
    });
  }

  render() {
    let filteredList = this.getFilteredList();
    let title = "Films showing right now";
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
