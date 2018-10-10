import React, { Component } from "react";

import "./Checkbox.scss";

export default class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };

    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick(e) {
    if (!e.target || e.target.tagName !== "A") {
      this.toggle(e);
    }
  }

  toggle(e) {
    let newCheckedState;
    if (!this.props.hasOwnProperty("checked")) {
      newCheckedState = !this.state.checked;
      this.setState({
        checked: newCheckedState,
      });
    } else {
      newCheckedState = !this.props.checked;
    }

    if (this.props.onCheck && typeof this.props.onCheck === "function") {
      this.props.onCheck(e, newCheckedState);
    }
  }

  onKeyDown(e) {
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      this.toggle(e);
    }
  }

  render() {
    let containerClassName = `checkbox ${this.props.className || ""}`;
    let checked;
    if (this.props.hasOwnProperty("checked")) {
      checked = this.props.checked;
    } else {
      checked = this.state.checked;
    }

    if (checked) {
      containerClassName += " checked";
    }

    return (
      <div onClick={this.onClick} className={containerClassName}>
        <div
          tabIndex={0}
          className="checkbox-inside"
          onKeyDown={this.onKeyDown}
        >
          <i className="fa fa-check" />
        </div>
        <label>{this.props.label}</label>
      </div>
    );
  }
}
