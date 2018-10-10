import React, { Component } from "react";

import "./Header.scss";

import SearchBar from "./SearchBar";

export default class Header extends Component {
  displayStuff() {}

  render() {
    return (
      <div className="header">
        <div className="logo-container">
          <img src="./logo.png" alt="logo" />
        </div>
        <div className="search-bar-container">
          <SearchBar onChange={this.props.onNameFilterChange} />
        </div>
      </div>
    );
  }
}
