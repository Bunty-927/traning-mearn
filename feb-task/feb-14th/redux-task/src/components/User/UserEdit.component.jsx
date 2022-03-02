import React, { Component } from "react";
import { editUser } from "../../redux/User/User.actions";
import { connect } from "react-redux";

class UserEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleEdit = (e) => {
    e.preventDefault();

    // console.log("updated state", this.state);

    let editUserId = parseInt(this.props.editUserId);

    this.props.editUser(editUserId, this.state);

    this.props.navigate("/user");
  };

  render() {
    // console.log(this.props);
    let inputStyles =
      "w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

    let buttonStyles =
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

    return (
      <div>
        <form action="" className="m-auto w-1/4 ">
          <input
            className={inputStyles}
            type="text"
            placeholder="ID"
            name="id"
            value={this.props.editUserId}
            readOnly
          />
          <input
            className={inputStyles}
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={(e) => this.handleInputChange(e)}
          />
          <input
            className={inputStyles}
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={(e) => this.handleInputChange(e)}
          />
          <input
            className={inputStyles}
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => this.handleInputChange(e)}
          />
          <input
            className={inputStyles}
            type="text"
            placeholder="Password"
            name="password"
            onChange={(e) => this.handleInputChange(e)}
          />
          <div className="my-2">
            <button
              className={buttonStyles}
              type="submit"
              onClick={(e) => this.handleEdit(e)}
            >
              Edit user
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (id, user) => dispatch(editUser(id, user)),
  };
};

export default connect(null, mapDispatchToProps)(UserEdit);
