import React, { Component } from "react";

import "./SearchBar.scss";

export default class SearchBar extends Component {
  displayStuff() {}

  render() {
    return (
      <div className="search-bar">
        <i className="fa fa-search" />
        <input
          type="text"
          placeholder="Filter by name"
          value={this.props.filterValue}
          onChange={e => this.props.onChange(e.target.value)}
        />
      </div>
    );
  }
}
