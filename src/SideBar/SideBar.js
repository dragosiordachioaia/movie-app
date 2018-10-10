import React, { Component } from "react";

import "./SideBar.scss";

import RatingFilter from "RatingFilter/RatingFilter";
import Genres from "Genres/Genres";

export default class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="inner-container">
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
