import React, { Component } from "react";

import "./MovieItem.scss";

import { getImagePath } from "./utils";

export default class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false,
    };
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
      <div className={`movie-item ${this.state.imageLoaded ? "loaded" : ""}`}>
        <span className="rating">{this.props.data.vote_average}</span>
        <img
          className="poster-image"
          src={getImagePath(this.props.data.poster_path, this.props.config)}
          alt={`poster-${this.props.data.title}`}
          onLoad={() => this.setState({ imageLoaded: true })}
        />

        <svg
          className="poster-image-placeholder"
          viewBox="0 0 500 750"
          version="1.1"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="Artboard" fill="#353D42" fillRule="nonzero">
              <rect id="Rectangle" x="0" y="0" width="500" height="750" />
            </g>
          </g>
        </svg>
        <div className="info">
          <p className="title">{this.props.data.title}</p>
          <p className="genres">{this.displayGenres()}</p>
        </div>
      </div>
    );
  }
}
