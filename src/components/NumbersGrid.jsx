import React, { Component } from "react";
import Number from "./Number";
import "./NumbersGrid.css";

class NumbersGrid extends Component {
  render() {
    return (
      <div className="numbers-grid">
        {this.props.numbers.map(number => (
          <Number
            key={number.value}
            number={number}
            onToggle={this.props.onToggle}
          />
        ))}
      </div>
    );
  }
}

export default NumbersGrid;
