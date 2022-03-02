import React, { Component } from "react";

export default class CreateNewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      avatar: "",
    };
  }

  async createData(event, dataObject) {
    event.preventDefault();

    console.log("the received data ->", dataObject);
    await fetch("https://reqres.in/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dataObject),
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => console.log(data))
      .then(() => console.log("user created successfully"));
  }

  render() {
    return (
      <div>
        <form
          method="post"
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            marginTop: "15px",
            marginBottom: "15px",
            width: "250px",
            border: "1px solid black",
          }}
        >
          <input
            type="text"
            name="first_name"
            placeholder="first name"
            onChange={(e) => this.setState({ first_name: e.target.value })}
          />
          <input
            type="text"
            name="last_name"
            placeholder="last name"
            onChange={(e) => this.setState({ last_name: e.target.value })}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="text"
            name="avatar"
            placeholder="avatar url"
            onChange={(e) => this.setState({ avatar: e.target.value })}
          />
          <button
            onClick={(event) => {
              this.createData(event, this.state);
            }}
          >
            Create New User
          </button>
        </form>
      </div>
    );
  }
}
