import React, { Component } from "react";

import Checkbox from "./Checkbox";

export default class GenreItem extends Component {
  constructor(props) {
    super(props);

    // this.displayStuff = this.displayStuff.bind(this);
  }

  displayStuff() {}

  render() {
    return (
      <div className="genre-item">
        <Checkbox
          checked={this.props.checked}
          onCheck={() => this.props.onCheck(this.props)}
          label={this.props.name}
        />
      </div>
    );
  }
}
