import React, { Component } from "react";
import Star from "./Star";
import "./StarsGrid.css";

class StarGrid extends Component {
  state = {
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
    totalStarsSelected: 0
  };

  handleToggle = star => {
    this.updateStarState(star);
    this.updateTotalStarsSelected(star);
  };

  updateStarState = star => {
    const starIndex = this.state.stars.indexOf(star);
    const stars = [...this.state.stars];
    stars[starIndex] = { ...star };
    stars[starIndex].selected = !stars[starIndex].selected;
    this.setState({ stars });
  };

  updateTotalStarsSelected = star => {
    let totalStarsSelected = this.state.totalStarsSelected;
    const starIndex = this.state.stars.indexOf(star);
    const stars = [...this.state.stars];
    !stars[starIndex].selected ? totalStarsSelected++ : totalStarsSelected--;
    this.setState({ totalStarsSelected });
  };

  render() {
    return (
      <div className="stars-grid">
        {/* {this.state.totalStarsSelected} */}
        {this.state.stars.map(star => (
          <Star key={star.value} star={star} onToggle={this.handleToggle} />
        ))}
      </div>
    );
  }
}

export default StarGrid;
