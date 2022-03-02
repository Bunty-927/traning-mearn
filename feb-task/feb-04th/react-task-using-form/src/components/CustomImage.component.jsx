import React, { Component } from "react";

export default class CustomImage extends Component {
  render() {
    return <img src={this.props.url} alt="" />;
  }
}
