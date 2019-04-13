import React, { Component } from "react";
import "./Star.css";

class Star extends Component {
  render() {
    return (
      <div
        className={this.getStarClasses()}
        onClick={() => this.props.onToggle(this.props.star)}
      >
        <i className="fa fa-star" />
        <span className="star-value">{this.props.star.value}</span>
      </div>
    );
  }

  getStarClasses() {
    let classes = "star";
    classes += this.props.star.selected ? " star-selected" : "";
    return classes;
  }
}

export default Star;
