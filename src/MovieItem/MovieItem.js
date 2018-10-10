import React, { Component } from "react";

import "./MovieItem.scss";

import { getImagePath } from "utils";

export default class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false,
    };
    this.displayGenres = this.displayGenres.bind(this);
    this.displayPlaceholder = this.displayPlaceholder.bind(this);
  }

  displayGenres() {
    // we only want to render genres that actually exist in the list coming from
    // the API, because we those are the only ones we have names for
    return this.props.genres
      .filter(genreData => {
        return (
          !this.props.data.genre_ids ||
          this.props.data.genre_ids.includes(genreData.id)
        );
      })
      .map(genreData => genreData.name)
      .join(", ");
  }

  /**
    We need a placeholder in order to avoid visual glitches while the images load.
    The effect looks best if the placeholder image has the same aspect ratio as
    the real image. I've opted to use an svg for this, but it could have been
    anything else.
  **/
  displayPlaceholder() {
    if (this.state.imageLoaded) {
      return null;
    }

    return (
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
    );
  }

  /**
    To display the image & placeholder as cleanly as possible, we need an onload
    handler for each image in order to know when they have loaded, so that we
    can remove the placeholder.
  **/
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

        {this.displayPlaceholder()}
        <div className="info">
          <p className="title">{this.props.data.title}</p>
          <p className="genres">{this.displayGenres()}</p>
        </div>
      </div>
    );
  }
}
