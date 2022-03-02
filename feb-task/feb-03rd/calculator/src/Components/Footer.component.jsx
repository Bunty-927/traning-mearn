import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div style={{ margin: "auto", textAlign: "center", marginTop: "20px" }}>
        The result is {this.props.data}
      </div>
    );
  }
}
