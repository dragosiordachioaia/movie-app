import React, { Component } from "react";

import "./Sidebar.scss";

import RatingFilter from "./RatingFilter";
import Genres from "./Genres";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <RatingFilter
          minRating={this.props.minRating}
          onChange={this.props.onMinRatingChange}
        />
        <Genres
          genres={this.props.genres}
          onGenreCheck={this.props.onGenreCheck}
        />
      </div>
    );
  }
}
