import React, { Component } from "react";

import "./MovieItem.scss";

import { getImagePath } from "./utils";

export default class MovieItem extends Component {
  constructor(props) {
    super(props);

    this.displayGenres = this.displayGenres.bind(this);
  }

  displayGenres() {
    return this.props.genres
      .filter(genreData => {
        return this.props.data.genre_ids.includes(genreData.id);
      })
      .map(genreData => genreData.name)
      .join(", ");
  }

  render() {
    return (
      <div className="movie-item">
        <span className="rating">{this.props.data.vote_average}</span>
        <img
          src={getImagePath(this.props.data.poster_path, this.props.config)}
          alt={`poster-${this.props.data.title}`}
        />
        <div className="info">
          <p className="title">{this.props.data.title}</p>
          <p className="genres">{this.displayGenres()}</p>
        </div>
      </div>
    );
  }
}
