import React, { Component } from "react";
import "./Number.css";

class Number extends Component {
  render() {
    return (
      <span
        className={this.getNumberClasses()}
        onClick={() => this.props.onToggle(this.props.number)}
      >
        {this.props.number.value}
      </span>
    );
  }

  getNumberClasses() {
    let classes = "number";
    classes += this.props.number.selected ? " number-selected" : "";
    classes += this.props.number.disabled ? " number-disabled" : "";
    return classes;
  }
}

export default Number;
