import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const { inp1, inp2 } = this.props.data;
    // console.log("header data -> ", inp1);
    return (
      <div
        style={{ margin: "auto", textAlign: "center", marginBottom: "20px" }}
      >
        The first input = {inp1} and The second input = {inp2}
      </div>
    );
  }
}
