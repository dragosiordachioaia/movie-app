import React, { Component } from "react";

import "./MovieList.scss";

import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.displayList = this.displayList.bind(this);
    this.getFilteredList = this.getFilteredList.bind(this);
  }

  displayList() {
    return this.getFilteredList()
      .sort((a, b) => b.popularity - a.popularity)
      .map(movieData => {
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
    return (
      <div className="movie-list-container">
        <h1 className="title">Films showing right now</h1>
        <div className="movie-list">{this.displayList()}</div>
      </div>
    );
  }
}
