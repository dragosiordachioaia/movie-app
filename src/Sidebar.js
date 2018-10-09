import React, { Component } from "react";

import "./Sidebar.scss";

import Genres from "./Genres";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    // this.displayStuff = this.displayStuff.bind(this);
  }

  displayStuff() {}

  render() {
    return (
      <div className="sidebar">
        <p>stufff</p>
        <Genres
          genres={this.props.genres}
          onGenreCheck={this.props.onGenreCheck}
        />
      </div>
    );
  }
}
