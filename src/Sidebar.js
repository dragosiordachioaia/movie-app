import React, { Component } from "react";

import "./Sidebar.scss";

import RatingFilter from "./RatingFilter";
import Genres from "./Genres";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div class="inner-container">
          <RatingFilter
            minRating={this.props.minRating}
            onChange={this.props.onMinRatingChange}
          />
          <Genres
            genres={this.props.genres}
            onGenreCheck={this.props.onGenreCheck}
          />
        </div>
        <button className="expand" onClick={this.props.onExpand}>
          <i
            className={`fa fa-chevron-${this.props.expanded ? "up" : "down"}`}
          />
        </button>
      </div>
    );
  }
}
