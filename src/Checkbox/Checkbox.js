import React, { Component } from "react";

import "./Checkbox.scss";

export default class Checkbox extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick(e) {
    // this is meant to allow adding anchor tags in the labe, which
    // can be clicked without triggering the checkbox toggle behaviour
    if (!e.target || e.target.tagName !== "A") {
      this.toggle(e);
    }
  }

  toggle(e) {
    if (this.props.onCheck && typeof this.props.onCheck === "function") {
      this.props.onCheck(e, !this.props.checked);
    }
  }

  onKeyDown(e) {
    // for accesibility purposes, we want people to be able to toggle the
    // checkbox using the space and enter keys, in addition to the mouse
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      this.toggle(e);
    }
  }

  render() {
    let containerClassName = `checkbox ${this.props.className || ""}`;
    let checked = this.props.checked;

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
