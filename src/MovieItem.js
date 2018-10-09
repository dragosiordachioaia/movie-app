import React, { Component } from "react";

import "./MovieItem.css";

import { getImagePath } from "./utils";

export default class MovieItem extends Component {
  constructor(props) {
    super(props);

    // this.displayStuff = this.displayStuff.bind(this);
  }

  displayStuff() {}

  render() {
    return (
      <div className="movie-item">
        {/* <p>{this.props.data.title}</p> */}
        <img
          src={getImagePath(this.props.data.poster_path, this.props.config)}
        />
      </div>
    );
  }
}
