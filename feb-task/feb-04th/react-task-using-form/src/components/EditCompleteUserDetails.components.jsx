import React, { Component } from "react";

export default class EditCompleteUserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      first_name: this.props.data.first_name,
      last_name: this.props.data.last_name,
      email: this.props.data.email,
      avatar: this.props.data.avatar,
    };
  }

  async createData(event, dataObject) {
    event.preventDefault();

    let { id, first_name, last_name, email, avatar } = dataObject;
    if (
      id === "" ||
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      avatar === ""
    ) {
      return alert("all fields are mandatory");
    }

    console.log("edited data -> ", dataObject);

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
      .then(() => console.log("user edited successfully"));
  }

  render() {
    let { data } = this.props;
    return (
      <div>
        <h3>Edit data in below form.</h3>
        <form
          action=""
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
            type="number"
            name="userId"
            id=""
            placeholder="USER ID"
            defaultValue={data.id}
            onChange={(e) => this.setState({ id: e.target.value })}
            readOnly
          />
          <input
            type="text"
            name="userFirstName"
            id=""
            placeholder="FIRST NAME"
            defaultValue={data.first_name}
            onChange={(e) => this.setState({ first_name: e.target.value })}
          />
          <input
            type="text"
            name="userLastName"
            id=""
            placeholder="LAST NAME"
            defaultValue={data.last_name}
            onChange={(e) => this.setState({ last_name: e.target.value })}
          />
          <input
            type="text"
            name="userEmail"
            id=""
            placeholder="EMAIL"
            defaultValue={data.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="text"
            name="userAvatar"
            id=""
            placeholder="AVATAR URL"
            defaultValue={data.avatar}
            onChange={(e) => this.setState({ avatar: e.target.value })}
          />
          <button
            type="submit"
            onClick={(event) => this.createData(event, this.state)}
          >
            Edit Details
          </button>
        </form>
      </div>
    );
  }
}
