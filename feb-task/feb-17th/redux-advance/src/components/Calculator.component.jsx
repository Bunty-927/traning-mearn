import React, { Component } from "react";
import { connect } from "react-redux";
import calculateResult from "../redux/Calculator/Actions";
import StylingConstants from "../styles/constants";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: "",
    };
  }

  // componentDidMount() {
  // console.log("before the store is", store.getState());
  // store.dispatch(calculateResult("5+4"));
  // console.log("after the store is", store.getState());
  // console.log(this.props);
  // }

  handleInputChange = (e) => {
    this.setState({
      expression: e.target.value,
    });
  };

  handleClick = () => {
    // console.log(this.state.expression);
    // store.dispatch(calculateResult(this.state.expression));
    this.props.calculateResult(this.state.expression);
  };

  render() {
    return (
      <div className="w-1/4 m-auto">
        <input
          type="text"
          className={StylingConstants.inputStyles}
          name=""
          id=""
          placeholder="enter expression here"
          onChange={(e) => this.handleInputChange(e)}
        />
        <div className="m-auto flex justify-evenly mt-2">
          <button
            className={StylingConstants.buttonStyles}
            onClick={() => this.handleClick()}
          >
            Result
          </button>
        </div>
        <div>
          <h3 className="text-2xl text-center">
            The result is {this.props.expression}
          </h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("map calling", state);
  return {
    expression: state.calc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    calculateResult: (data) => dispatch(calculateResult(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
