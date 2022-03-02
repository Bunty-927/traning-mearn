import React, { Component } from "react";

export default class TestComponent extends Component {
  constructor() {
    super();
    this.text = React.createRef();
    this.inp = React.createRef();
  }

  componentDidMount() {
    console.log("description -> " + this.text.current.innerHTML);
  }

  getValue = () => {
    const x = this.inp.current.value;
    console.log(x);
  }

  render() {
    return (
      <div>
        <h2>createRef demo</h2>

        <p ref={this.text}>this is p tag</p>
        <input
          type="text"
          name=""
          id=""
          ref={this.inp}
          onChange={this.getValue}
        />
      </div>
    );
  }
}
