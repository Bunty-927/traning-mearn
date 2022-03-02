import React, { Component } from "react";
import { connect } from "react-redux";
import createNewUser from "../redux/action";

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      qualification: "",
      isEligible: "",
      organization: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createNewUser(this.state);

    // console.log(this.state);
  };

  render() {
    let inputStyles =
      "w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

    let buttonStyles =
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

    return (
      <div>
        <form action="" className="m-auto w-1/4 ">
          <div>
            <input
              className={inputStyles}
              type="text"
              name="firstName"
              id=""
              placeholder="First Name"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <input
              className={inputStyles}
              type="text"
              name="lastName"
              id=""
              placeholder="Last Name"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                // checked={this.state.gender === "Male"}
                onChange={(e) => this.handleChange(e)}
              />
              MALE
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => this.handleChange(e)}
                // checked={this.state.gender === "Female"}
              />
              FEMALE
            </label>
          </div>
          <div>Selected option is: {this.state.gender}</div>
          <div>
            <input
              className={inputStyles}
              type="number"
              name="age"
              id=""
              placeholder="Age"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <input
              className={inputStyles}
              type="text"
              name="qualification"
              id=""
              placeholder="Qualification"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <span>Is eligible for voting?</span>
            <label>
              <input
                type="radio"
                name="isEligible"
                value="yes"
                onChange={(e) => this.handleChange(e)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isEligible"
                value="no"
                onChange={(e) => this.handleChange(e)}
              />
              No
            </label>
          </div>
          <input
            className={inputStyles}
            type="text"
            name="organization"
            id=""
            placeholder="Organization Name"
            onChange={(e) => this.handleChange(e)}
          />
          <div className="my-2">
            <button
              className={buttonStyles}
              type="submit"
              onClick={(e) => this.handleSubmit(e)}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   console.log("map calling", state);
// };

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (user) => dispatch(createNewUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(AddUser);
