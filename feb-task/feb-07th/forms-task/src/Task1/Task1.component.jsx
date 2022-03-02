import React, { Component } from "react";
import DisplayUser from "./DisplayUser.component";
import Form from "./Form.component";

export default class Task1 extends Component {
  render() {
    return (
      <div>
        <Form />
        <DisplayUser />
      </div>
    );
  }
}
