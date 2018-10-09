import React, { Component } from "react";

import "./Genres.scss";

import GenreItem from "./GenreItem";

export default class Genres extends Component {
  constructor(props) {
    super(props);

    this.displayGenres = this.displayGenres.bind(this);
  }

  displayGenres() {
    return this.props.genres.map(genreData => {
      return (
        <GenreItem
          key={genreData.id}
          {...genreData}
          onCheck={this.props.onGenreCheck}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <p>Genres:</p>
        <ul className="genres-filter">{this.displayGenres()}</ul>
      </div>
    );
  }
}
