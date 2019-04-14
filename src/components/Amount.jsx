import React, { Component } from "react";
import "./Amount.css";

class Amount extends Component {
  render() {
    return <span className="amount">Mise total {this.props.amount} €</span>;
  }
}

export default Amount;
