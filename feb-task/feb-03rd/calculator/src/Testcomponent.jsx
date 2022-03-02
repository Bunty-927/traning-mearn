import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor(props) {
    super(props);

    this.inputField = React.createRef();

    this.state = {
      uppercase: false,
    };
  }

  toggleInputCase() {
    const isUpperCase = this.state.uppercase;

    const value = this.inputField.current.value;
    console.log(value);

    this.inputField.current.value = isUpperCase
      ? value.toLowerCase()
      : value.toUpperCase();

    this.setState({ uppercase: !isUpperCase });
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputField} />
        <button onClick={() => this.toggleInputCase()}>Toggle</button>
      </div>
    );
  }
}
