import React, { Component } from "react";
import Home from "./Home.component";

export default class About extends Component {
  render() {
    return (
      <div>
        <Home />
        <h1 style={{textAlign: "center"}}>this is about us page</h1>
      </div>
    );
  }
}
