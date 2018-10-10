import React, { Component } from "react";

import "./RangeSlider.scss";

import { roundToStep } from "utils";

export default class RangeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseDown: false,
      touchStart: false,
    };
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.callOnChange = this.callOnChange.bind(this);

    this.lastMousePos = 0;
    this.axisRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("mouseup", this.onMouseUp);
    window.addEventListener("touchend", this.onTouchEnd);
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("touchmove", this.onTouchMove);
  }

  onMouseUp(e) {
    this.setState({ mouseDown: false });
  }
  onTouchEnd(e) {
    this.setState({ touchStart: false });
  }

  onMouseMove(e) {
    if (!this.state.mouseDown) {
      return;
    }
    let axisElement = this.axisRef.current;
    let axisWidth = axisElement.offsetWidth;
    let axisLeft = axisElement.getBoundingClientRect().left;
    let position = Math.round(e.screenX - axisLeft);
    position = Math.min(axisWidth, Math.max(position, 0));
    let percentage = position / axisWidth;
    this.callOnChange(percentage);
  }

  callOnChange(percentage) {
    if (this.props.onChange && typeof this.props.onChange === "function") {
      let minMaxDifference = this.props.max - this.props.min;
      let realAmount = roundToStep(
        percentage * minMaxDifference,
        this.props.step
      );
      this.props.onChange(realAmount);
    }
  }

  onTouchMove(e) {
    if (!this.state.touchStart) {
      return;
    }
    let axisElement = this.axisRef.current;
    let axisWidth = axisElement.offsetWidth;
    let axisLeft = axisElement.getBoundingClientRect().left;
    let position = Math.round(e.changedTouches[0].pageX - axisLeft);
    position = Math.min(axisWidth, Math.max(position, 0));
    let percentage = position / axisWidth;
    this.callOnChange(percentage);
  }

  render() {
    let cursorPosition =
      (this.props.value / (this.props.max - this.props.min)) * 100;
    return (
      <div className="range-slider">
        <div
          className="cursor"
          style={{ left: `${cursorPosition}%` }}
          onMouseDown={e => this.setState({ mouseDown: true })}
          onTouchStart={e => this.setState({ touchStart: true })}
        />
        <div className="tooltip" style={{ left: `${cursorPosition}%` }}>
          {this.props.value}
        </div>
        <div className="axis" ref={this.axisRef} />
        <div
          className="axis-highlight"
          style={{ width: `${cursorPosition}%` }}
        />
        <label className="min">{this.props.min}</label>
        <label className="max">{this.props.max}</label>
      </div>
    );
  }
}
