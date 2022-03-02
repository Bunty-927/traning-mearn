import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    let elementStyle = {
      padding: "5px",
    };
    return (
      <div
        style={{ margin: "auto", display: "flex", justifyContent: "center" }}
      >
        <Link style={elementStyle} to={"/users"}>
          Users
        </Link>
        <Link style={elementStyle} to={"/about"}>
          About Us
        </Link>
        <Link style={elementStyle} to={"/contact"}>
          Contact Us
        </Link>
      </div>
    );
  }
}
