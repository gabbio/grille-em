import React, { Component } from "react";
import Star from "./Star";
import "./StarsGrid.css";

class StarsGrid extends Component {
  render() {
    return (
      <div className="stars-grid">
        {this.props.stars.map(star => (
          <Star key={star.value} star={star} onToggle={this.props.onToggle} />
        ))}
      </div>
    );
  }
}

export default StarsGrid;
