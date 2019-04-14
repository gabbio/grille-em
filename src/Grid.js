import React, { Component } from "react";
import Amount from "./components/Amount";
import NumbersGrid from "./components/NumbersGrid";
import StarsGrid from "./components/StarsGrid";
import "./Grid.css";

const multiples = [
  {
    cost: {
      currency: "EUR",
      value: 250
    },
    pattern: [5, 2]
  },
  {
    cost: {
      currency: "EUR",
      value: 750
    },
    pattern: [5, 3]
  },
  {
    cost: {
      currency: "EUR",
      value: 1500
    },
    pattern: [5, 4]
  },
  {
    cost: {
      currency: "EUR",
      value: 2500
    },
    pattern: [5, 5]
  },
  {
    cost: {
      currency: "EUR",
      value: 3750
    },
    pattern: [5, 6]
  },
  {
    cost: {
      currency: "EUR",
      value: 5250
    },
    pattern: [5, 7]
  },
  {
    cost: {
      currency: "EUR",
      value: 7000
    },
    pattern: [5, 8]
  },
  {
    cost: {
      currency: "EUR",
      value: 9000
    },
    pattern: [5, 9]
  },
  {
    cost: {
      currency: "EUR",
      value: 11250
    },
    pattern: [5, 10]
  },
  {
    cost: {
      currency: "EUR",
      value: 13750
    },
    pattern: [5, 11]
  },
  {
    cost: {
      currency: "EUR",
      value: 16500
    },
    pattern: [5, 12]
  },
  {
    cost: {
      currency: "EUR",
      value: 1500
    },
    pattern: [6, 2]
  },
  {
    cost: {
      currency: "EUR",
      value: 4500
    },
    pattern: [6, 3]
  },
  {
    cost: {
      currency: "EUR",
      value: 9000
    },
    pattern: [6, 4]
  },
  {
    cost: {
      currency: "EUR",
      value: 15000
    },
    pattern: [6, 5]
  },
  {
    cost: {
      currency: "EUR",
      value: 22500
    },
    pattern: [6, 6]
  },
  {
    cost: {
      currency: "EUR",
      value: 31500
    },
    pattern: [6, 7]
  },
  {
    cost: {
      currency: "EUR",
      value: 42000
    },
    pattern: [6, 8]
  },
  {
    cost: {
      currency: "EUR",
      value: 54000
    },
    pattern: [6, 9]
  },
  {
    cost: {
      currency: "EUR",
      value: 67500
    },
    pattern: [6, 10]
  },
  {
    cost: {
      currency: "EUR",
      value: 82500
    },
    pattern: [6, 11]
  },
  {
    cost: {
      currency: "EUR",
      value: 99000
    },
    pattern: [6, 12]
  },
  {
    cost: {
      currency: "EUR",
      value: 5250
    },
    pattern: [7, 2]
  },
  {
    cost: {
      currency: "EUR",
      value: 15750
    },
    pattern: [7, 3]
  },
  {
    cost: {
      currency: "EUR",
      value: 31500
    },
    pattern: [7, 4]
  },
  {
    cost: {
      currency: "EUR",
      value: 52500
    },
    pattern: [7, 5]
  },
  {
    cost: {
      currency: "EUR",
      value: 78750
    },
    pattern: [7, 6]
  },
  {
    cost: {
      currency: "EUR",
      value: 14000
    },
    pattern: [8, 2]
  },
  {
    cost: {
      currency: "EUR",
      value: 42000
    },
    pattern: [8, 3]
  },
  {
    cost: {
      currency: "EUR",
      value: 84000
    },
    pattern: [8, 4]
  },
  {
    cost: {
      currency: "EUR",
      value: 31500
    },
    pattern: [9, 2]
  },
  {
    cost: {
      currency: "EUR",
      value: 94500
    },
    pattern: [9, 3]
  },
  {
    cost: {
      currency: "EUR",
      value: 63000
    },
    pattern: [10, 2]
  }
];

class Grid extends Component {
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
    stars: [
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
      { value: 12, selected: false }
    ],
    numbersGridDisabled: false,
    starsGridDisabled: false,
    totalNumbersSelected: 0,
    totalStarsSelected: 0,
    multiples: [...multiples],
    amount: 0
  };

  handleNumberToggle = number => {
    this.updateNumberState(number);
    this.updateTotalNumbersSelected(number);
  };

  handleStarToggle = star => {
    this.updateStarState(star);
    this.updateTotalStarsSelected(star);
  };

  updateNumberState = number => {
    const numberIndex = this.state.numbers.indexOf(number);
    const numbers = [...this.state.numbers];
    numbers[numberIndex] = { ...number };
    numbers[numberIndex].selected = !numbers[numberIndex].selected;
    this.setState({ numbers });
  };

  updateStarState = star => {
    const starIndex = this.state.stars.indexOf(star);
    const stars = [...this.state.stars];
    stars[starIndex] = { ...star };
    stars[starIndex].selected = !stars[starIndex].selected;
    this.setState({ stars });
  };

  updateTotalNumbersSelected = number => {
    let totalNumbersSelected = this.state.totalNumbersSelected;
    const numberIndex = this.state.numbers.indexOf(number);
    const numbers = [...this.state.numbers];
    !numbers[numberIndex].selected
      ? totalNumbersSelected++
      : totalNumbersSelected--;
    this.setState({ totalNumbersSelected }, () => {
      this.handleGridState();
    });
  };

  updateTotalStarsSelected = star => {
    let totalStarsSelected = this.state.totalStarsSelected;
    const starIndex = this.state.stars.indexOf(star);
    const stars = [...this.state.stars];
    !stars[starIndex].selected ? totalStarsSelected++ : totalStarsSelected--;
    this.setState({ totalStarsSelected }, () => {
      this.handleGridState();
    });
  };

  handleGridState = () => {
    const { currentMultiple, multiplesAvailable } = this.getCurrentMultiple();
    this.updateCost(currentMultiple);
  };

  getCurrentMultiple = () => {
    const totalNumbersSelected = this.state.totalNumbersSelected;
    const totalStarsSelected = this.state.totalStarsSelected;
    const multiplesAvailable = this.state.multiples.filter(
      multiple => multiple.pattern[0] === totalNumbersSelected
    );
    const currentMultiple = multiplesAvailable.filter(
      multiple => multiple.pattern[1] === totalStarsSelected
    );
    return { currentMultiple, multiplesAvailable };
  };

  updateCost(currentMultiple) {
    try {
      const amount = currentMultiple[0].cost.value / 100;
      this.setState({ amount });
    } catch {
      this.setState({ amount: 0 });
    }
  }

  render() {
    return (
      <div className="Grid">
        <div className="grid-header">
          {this.state.totalNumbersSelected}
          {this.state.totalStarsSelected}
          <span className="title">Grille 1</span>
          <Amount amount={this.state.amount} />
        </div>
        <NumbersGrid
          numbers={this.state.numbers}
          onToggle={this.handleNumberToggle}
        />
        <StarsGrid stars={this.state.stars} onToggle={this.handleStarToggle} />
      </div>
    );
  }
}

export default Grid;
