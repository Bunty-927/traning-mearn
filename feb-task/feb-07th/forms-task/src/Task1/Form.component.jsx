import React, { Component } from "react";
import getBase64 from "../helper/storeImageToLocalStorage.js";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.form = React.createRef();
  }

  handleClick = (e) => {
    e.preventDefault();

    const key = "pgm1";

    let element = this.form.current;

    let obj = {
      first_name: element.children[0].value,
      last_name: element.children[1].value,
      email: element.children[2].value,
      phone: element.children[3].value,
      password: element.children[4].value,
      picture: localStorage.getItem("fileBase64"),
    };

    localStorage.removeItem("fileBase64");

    if (JSON.parse(localStorage.getItem(key)) === null) {
      let data = [];
      data.push(obj);
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      let storedData = JSON.parse(localStorage.getItem(key));
      //   console.log("stored data -> ", storedData);
      storedData.push(obj);
      localStorage.setItem(key, JSON.stringify(storedData));
    }

    element.children[0].value = "";
    element.children[1].value = "";
    element.children[2].value = "";
    element.children[3].value = "";
    element.children[4].value = "";

    // alert("data added please refresh the page");

    window.location.reload();
  };

  imageUpload = (e) => {
    const file = e.target.files[0];

    getBase64(file).then((base64) => {
      localStorage["fileBase64"] = base64;
      console.debug("file stored", base64);
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Add new data here!</h1>
        <form
          action=""
          method="post"
          ref={this.form}
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
          <input type="text" name="first_name" id="" placeholder="First Name" />
          <input type="text" name="last_name" id="" placeholder="Last Name" />
          <input type="text" name="email" id="" placeholder="Email" />
          <input type="number" name="phone" id="" placeholder="Phone number" />
          <input type="text" name="password" id="" placeholder="Password" />
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            onChange={this.imageUpload}
            // ref={this.image}
            accept=".png, .jpg"
          />
          <button type="" onClick={(e) => this.handleClick(e)}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
