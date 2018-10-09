import React, { Component } from "react";

import "./Header.scss";

import SearchBar from "./SearchBar";

export default class Header extends Component {
  constructor(props) {
    super(props);

    // this.displayStuff = this.displayStuff.bind(this);
  }

  displayStuff() {}

  render() {
    return (
      <div className="header">
        <div className="logo-container">
          <p>Logo</p>
        </div>
        <div className="search-bar-container">
          <SearchBar />
        </div>
      </div>
    );
  }
}
