import React, { Component } from "react";
import Footer from "./Footer.component";
import Header from "./Header.component";

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.input1 = React.createRef();
    this.input2 = React.createRef();

    this.state = {
      result: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.value);
  }

  handleClick(op) {
    let val1 = parseInt(this.input1.current.value);
    let val2 = parseInt(this.input2.current.value);

    switch (true) {
      case op === "+":
        this.setState({ result: val1 + val2 });
        break;
      case op === "-":
        this.setState({ result: val1 - val2 });
        break;
      case op === "*":
        this.setState({ result: val1 * val2 });
        break;
      case op === "/":
        this.setState({ result: val1 / val2 });
        break;
      default:
        break;
    }
  }

  render() {
    // console.log("render -> ", this.state);
    return (
      <div>
        <Header data={this.state} />

        <div style={{ margin: "auto", width: "50%", marginTop: "10px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="number"
              ref={this.input1}
              placeholder="enter 1st number"
              onChange={this.handleChange}
              name="inp1"
            />
            <input
              type="number"
              ref={this.input2}
              placeholder="enter 2nd number"
              onChange={this.handleChange}
              name="inp2"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={() => this.handleClick("+")}>Add</button>
            <button onClick={() => this.handleClick("*")}>Multiply</button>
            <button onClick={() => this.handleClick("-")}>Subtract</button>
            <button onClick={() => this.handleClick("/")}>Divide</button>
          </div>
        </div>

        <Footer data={this.state.result} />
      </div>
    );
  }
}
