import React, { Component } from "react";

import "./Sidebar.scss";

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
        <p>stufff</p>
        <p>stufff</p>
      </div>
    );
  }
}
