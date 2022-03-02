import React, { Component } from "react";
import getBase64 from "../helper/storeImageToLocalStorage";

export default class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editData: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        picture: "",
      },
    };
  }

  handleEditData = (eName, event) => {
    event.preventDefault();
    this.setState({
      editData: {
        ...this.state.editData,
        [eName]: event.target.value,
      },
    });
  };

  imageUpload = (e) => {
    const file = e.target.files[0];

    getBase64(file).then((base64) => {
      localStorage["fileBase64"] = base64;
      console.debug("file stored", base64);

      this.setState({
        editData: {
          ...this.state.editData,
          picture: localStorage.getItem("fileBase64"),
        },
      });
    });
  };

  setImageDataToObj = (imageData) => {
    this.setState({
      editData: {
        ...this.state.editData,
        picture: imageData,
      },
    });
  };

  handleEditSubmit = (event, editDataIndex) => {
    event.preventDefault();

    let element = JSON.parse(localStorage.getItem("pgm1"));
    element.splice(editDataIndex, 1, this.state.editData);

    this.setNewDataToLocalStorage(element);

    localStorage.removeItem("fileBase64");
  };

  setNewDataToLocalStorage = (data) => {
    console.log("set calling");
    localStorage.setItem("pgm1", JSON.stringify(data));
    window.location.reload();
  };

  render() {
    let { index } = this.props;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Edit data here.</h1>
        <p style={{ textAlign: "center" }}>
          You are editing data - {index + 1}{" "}
        </p>
        <form
          action=""
          method="post"
          //   ref={this.form}
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
            id=""
            placeholder="First Name"
            onChange={(e) => this.handleEditData(e.target.name, e)}
          />
          <input
            type="text"
            name="last_name"
            id=""
            placeholder="Last Name"
            onChange={(e) => this.handleEditData(e.target.name, e)}
          />
          <input
            type="text"
            name="email"
            id=""
            placeholder="Email"
            onChange={(e) => this.handleEditData(e.target.name, e)}
          />
          <input
            type="number"
            name="phone"
            id=""
            placeholder="Phone number"
            onChange={(e) => this.handleEditData(e.target.name, e)}
          />
          <input
            type="text"
            name="password"
            id=""
            placeholder="Password"
            onChange={(e) => this.handleEditData(e.target.name, e)}
          />
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            onChange={this.imageUpload}
            accept=".png, .jpg"
          />
          <button type="" onClick={(e) => this.handleEditSubmit(e, index)}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
