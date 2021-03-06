import React, { Component } from "react";

import "./RatingFilter.scss";

import RangeSlider from "RangeSlider/RangeSlider";

export default class RatingFilter extends Component {
  render() {
    return (
      <div className="rating-filter">
        <p className="label">Minimum rating</p>
        <RangeSlider
          min={0}
          max={10}
          step={0.5}
          value={this.props.minRating}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
