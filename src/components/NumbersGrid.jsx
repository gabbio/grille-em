import React, { Component } from "react";
import Number from "./Number";
import "./NumbersGrid.css";

class NumberGrid extends Component {
  state = {
    numbers: [
      { value: 1, selected: false },
      { value: 2, selected: false },
      { value: 3, selected: false },
      { value: 4, selected: false },
      { value: 5, selected: false },
      { value: 6, selected: false },
      { value: 7, selected: false },
      { value: 8, selected: false },
      { value: 9, selected: false },
      { value: 10, selected: false },
      { value: 11, selected: false },
      { value: 12, selected: false },
      { value: 13, selected: false },
      { value: 14, selected: false },
      { value: 15, selected: false },
      { value: 16, selected: false },
      { value: 17, selected: false },
      { value: 18, selected: false },
      { value: 19, selected: false },
      { value: 20, selected: false },
      { value: 21, selected: false },
      { value: 22, selected: false },
      { value: 23, selected: false },
      { value: 24, selected: false },
      { value: 25, selected: false },
      { value: 26, selected: false },
      { value: 27, selected: false },
      { value: 28, selected: false },
      { value: 29, selected: false },
      { value: 30, selected: false },
      { value: 31, selected: false },
      { value: 32, selected: false },
      { value: 33, selected: false },
      { value: 34, selected: false },
      { value: 35, selected: false },
      { value: 36, selected: false },
      { value: 37, selected: false },
      { value: 38, selected: false },
      { value: 39, selected: false },
      { value: 40, selected: false },
      { value: 41, selected: false },
      { value: 42, selected: false },
      { value: 43, selected: false },
      { value: 44, selected: false },
      { value: 45, selected: false },
      { value: 46, selected: false },
      { value: 47, selected: false },
      { value: 48, selected: false },
      { value: 49, selected: false },
      { value: 50, selected: false }
    ],
    totalNumbersSelected: 0
  };

  handleToggle = number => {
    this.updateNumberState(number);
    this.updateTotalNumbersSelected(number);
  };

  updateNumberState = number => {
    const numberIndex = this.state.numbers.indexOf(number);
    const numbers = [...this.state.numbers];
    numbers[numberIndex] = { ...number };
    numbers[numberIndex].selected = !numbers[numberIndex].selected;
    this.setState({ numbers });
  };

  updateTotalNumbersSelected = number => {
    let totalNumbersSelected = this.state.totalNumbersSelected;
    const numberIndex = this.state.numbers.indexOf(number);
    const numbers = [...this.state.numbers];
    !numbers[numberIndex].selected
      ? totalNumbersSelected++
      : totalNumbersSelected--;
    this.setState({ totalNumbersSelected });
  };

  render() {
    return (
      <div className="numbers-grid">
        {this.state.numbers.map(number => (
          <Number
            key={number.value}
            number={number}
            onToggle={this.handleToggle}
          />
        ))}
      </div>
    );
  }
}

export default NumberGrid;
