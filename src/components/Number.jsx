import React, { Component } from "react";

class Number extends Component {
  state = {
    selected: false
  };

  handleToggle = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <span className={this.getNumberClasses()} onClick={this.handleToggle}>
        12
      </span>
    );
  }

  getNumberClasses() {
    let classes = "number";
    classes += this.state.selected ? " number-selected" : "";
    return classes;
  }
}

export default Number;
