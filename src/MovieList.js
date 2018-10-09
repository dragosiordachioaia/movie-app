import React, { Component } from "react";

import "./MovieList.scss";

import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.displayList = this.displayList.bind(this);
  }

  displayList() {
    return this.props.movies.map(movieData => {
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

  render() {
    return (
      <div className="movie-list-container">
        <h1 className="title">Films showing right now</h1>
        <div className="movie-list">{this.displayList()}</div>
      </div>
    );
  }
}
