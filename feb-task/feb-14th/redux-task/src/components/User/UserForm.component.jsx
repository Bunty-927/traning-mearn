import React, { Component } from "react";
import store from "../../redux/store";
import { createNewUser, deleteUser } from "../../redux/User/User.actions";
import { connect } from "react-redux";
// import UserActionTypes from "../redux/User/User.types";
import { Link } from "react-router-dom";



class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    this.form = React.createRef();
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createNewUser(this.state);

    // store.dispatch(createNewUser(this.state));
    // console.log(store.getState());

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    this.formReset();
  };

  formReset() {
    let length = this.form.current.length;

    for (let i = 0; i < length - 1; i++) {
      this.form.current.children[i].value = "";
    }
  }

  render() {
    let inputStyles =
      "w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

    let buttonStyles =
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

    let styleElement = {
      margin: "auto",
      border: "1px solid black",
      borderCollapse: "collapse",
      padding: "5px",
      marginBottom: "25px",
    };

    let trStyles = {
      border: "1px solid black",
      borderCollapse: "collapse",
      textAlign: "center",
    };

    // console.log("props", this.props.User);

    return (
      <div>
        <form action="" className="m-auto w-1/4 " ref={this.form}>
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
              onClick={(e) => this.handleSubmit(e)}
            >
              Add user
            </button>
          </div>
        </form>
        <div className="m-auto justify-center inline my-4 mb-8">
          <table style={styleElement}>
            <tbody>
              {this.props.User.length > 0 ? (
                <div>
                  <tr>
                    <td style={styleElement}>ID</td>
                    <td style={styleElement}>FIRST NAME</td>
                    <td style={styleElement}>LAST NAME</td>
                    <td style={styleElement}>EMAIL</td>
                    <td style={styleElement}>PASSWORD</td>
                    <td style={styleElement}>EDIT</td>
                    <td style={styleElement}>DELETE</td>
                  </tr>
                  {this.props.User.map((data, index) => (
                    <tr style={trStyles} key={data.id}>
                      <td style={styleElement}>{data.id}</td>
                      <td style={styleElement}>{data.user.firstName}</td>
                      <td style={styleElement}>{data.user.lastName}</td>
                      <td style={styleElement}>{data.user.email}</td>
                      <td style={styleElement}>{data.user.password}</td>
                      <td style={styleElement}>
                        <button className="text-blue">
                          <Link
                            style={{ textDecoration: "none", color: "#697be0" }}
                            to={`/useredit?id=${data.id}`}
                          >
                            EDIT
                          </Link>
                        </button>
                      </td>
                      <td style={styleElement}>
                        <button
                          className="text-blue"
                          onClick={() => this.props.deleteUser(data.id)}
                        >
                          <Link
                            style={{ textDecoration: "none", color: "#697be0" }}
                            to="/user"
                          >
                            DELETE
                          </Link>
                        </button>
                      </td>
                    </tr>
                  ))}
                </div>
              ) : (
                "No data"
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    User: state.User,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (id, user) => dispatch(createNewUser(id, user)),
    deleteUser: (id) => dispatch(deleteUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);

// connect => map => user=> {}
