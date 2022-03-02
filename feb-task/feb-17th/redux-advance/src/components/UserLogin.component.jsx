import React, { Component } from "react";
import { connect } from "react-redux";
import { SaveLogin } from "../redux/User/Action";
import StylingConstants from "../styles/constants";

class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.SaveLogin(this.state);
    this.props.navigate("/dashboard");
    console.log("the state after update", this.state);
  };

  render() {
    // console.log(this.props);
    return (
      <div className="m-auto sm:w-1/2 lg:w-1/4">
        <form>
          <input
            className={StylingConstants.inputStyles}
            type="text"
            name="email"
            id=""
            placeholder="Enter your email address"
            onChange={(e) => this.handleInputChange(e)}
          />
          <input
            className={StylingConstants.inputStyles}
            type="text"
            name="password"
            id=""
            placeholder="Enter your password"
            onChange={(e) => this.handleInputChange(e)}
          />
          <div className="flex justify-center mt-2">
            <button
              className={StylingConstants.buttonStyles}
              type="submit"
              onClick={(e) => this.handleSubmit(e)}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SaveLogin: (data) => dispatch(SaveLogin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
